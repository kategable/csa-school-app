import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  events =  [
    {  id:  1,  name:  '2019-20 Exploration Day', description: 'Explorations day event May 15th'  },
    {  id:  2,  name:  '2018-19', description: 'some'  },
    {  id:  3,  name:  '2017-18', description: 'some'  },
    {  id:  4,  name:  '2018-17', description: 'some'  },

   ];
   let schools =
   [
    {  id:  1,  name:  'es', Description: 'some'  },
    {  id:  2,  name:  'ms', Description: 'some'  },
    {  id:  3,  name:  'hs', Description: 'some'  },

   ];

   return {events};

  }
}
