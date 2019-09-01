import { Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


import {  Store } from '@ngrx/store';
import { State } from '../store/reducers/reducer';
import * as StoreActions from '../store/actions/actions'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Create an observable of Auth0 instance of client
  auth0Client$ = (from(
    createAuth0Client({
      domain: "csa-app.auth0.com",
      client_id: "4xQYOZje04t1jP6g2HN8kjBxI4ahZr3Y",
      redirect_uri: `${window.location.origin}/callback`
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1), // Every subscription receives the same shared value
    catchError(err => throwError(err))
  );
  // Define observables for SDK methods that return promises by default
  // For each Auth0 SDK method, first ensure the client instance is ready
  // concatMap: Using the client instance, call SDK method; SDK returns a promise
  // from: Convert that resulting promise into an observable
  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated()))
  );
  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );
  // Create subject and public observable of user profile data
  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();
  // Create a local property for login status
  loggedIn: boolean = null;

  constructor(private router: Router,private store: Store<State>) { }

  // getUser$() is a method because options can be passed if desired
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
  getUser$(options?): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options)))
    );
  }

  localAuthSetup() {
    // This should only be called on app initialization
    // Set up local authentication streams
    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (loggedIn) {
          // If authenticated, get user data
          return this.getUser$();
        }
        // If not authenticated, return stream that emits 'false'
        return of(loggedIn);
      })
    );
    const checkAuthSub = checkAuth$.subscribe((response: { [key: string]: any } | boolean) => {
      // If authenticated, response will be user object
      // If not authenticated, response will be 'false'
      // Set subjects appropriately
      if (response) {
        console.log("")
        const user = response;
        user["loggedIn"] = true;
        this.userProfileSubject$.next(user);
        this.store.dispatch(new StoreActions.UserChanged(user));
        this.store.dispatch(new StoreActions.LoadEventsForUser());
      }
      this.loggedIn = !!response;
     // this.store.dispatch(new StoreActions.UserChanged({loggedIn: this.loggedIn}));
      // Clean up subscription
      checkAuthSub.unsubscribe();
    });
  }

  login(redirectPath: string = '/') {
    // A desired redirect path can be passed to login method
    // (e.g., from a route guard)
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log in
      client.loginWithRedirect({
        redirect_uri: `${window.location.origin}/callback`,
        appState: { target: redirectPath }
      });
    });
  }

  handleAuthCallback() {
    // Only the callback component should call this method
    // Call when app reloads after user logs in with Auth0
    let targetRoute: string; // Path to redirect to after login processsed
    // Ensure Auth0 client instance exists
    const authComplete$ = this.auth0Client$.pipe(
      // Have client, now call method to handle auth callback redirect
      concatMap(() => this.handleRedirectCallback$),
      tap(cbRes => {
        // Get and set target redirect route from callback results
        targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
      }),
      concatMap(() => {
        // Redirect callback complete; create stream
        // returning user data and authentication status
        return combineLatest(
          this.getUser$(),
          this.isAuthenticated$
        );
      })
    );
    // Subscribe to authentication completion observable
    // Response will be an array of user and login status
    authComplete$.subscribe(([user, loggedIn]) => {
      // Update subjects and loggedIn property
      user.loggedIn = loggedIn;
      console.log("")
      this.userProfileSubject$.next(user);
      this.loggedIn = loggedIn;
      this.store.dispatch(new StoreActions.UserChanged(user));
      this.store.dispatch(new StoreActions.LoadEventsForUser());
      // Redirect to target route after callback processing
      this.router.navigate([targetRoute]);
    });
  }

  logout() {
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log out
      client.logout({
        client_id: "4xQYOZje04t1jP6g2HN8kjBxI4ahZr3Y",
        returnTo: `${window.location.origin}`
      });
    });
  }

}
