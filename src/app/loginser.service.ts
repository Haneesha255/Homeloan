import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserService {



  constructor(private myhttp:HttpClient) { }

  restUrl:string="http://localhost:8181/api";
   
  validateLogin(loginValues:any)
 {
     return this.myhttp.get(this.restUrl+"/"+loginValues.email+"/"+loginValues.password)
 }
  //  validateLogin(login:/l){

  //  }
  }
