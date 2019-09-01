import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getSchools(){
       return this.httpClient.get(this.SERVER_URL + 'schools');
  }
  public getEvents(){ 
    return this.httpClient.get(this.SERVER_URL + 'events');
}
public createYear(year: {id: number, name: string, description : string}){
  return this.httpClient.post(`${this.SERVER_URL + 'years'}`, year)
}

  public getSchool(schoolId){
       return this.httpClient.get(`${this.SERVER_URL + 'schools'}/${schoolId}`);
  }
  public createSchool(school: {id: number, name: string,  userId: string, description: string}){
      return this.httpClient.post(`${this.SERVER_URL + 'schools'}`, school)
  }

  public deletePolicy(schoolId){
      return this.httpClient.delete(`${this.SERVER_URL + 'schools'}/${schoolId}`)
  }
  public updatePolicy(school: {id: number, name: string,  userId: string, description: string}){
      return this.httpClient.put(`${this.SERVER_URL + 'schools'}/${school.id}`, school)
  }
}
