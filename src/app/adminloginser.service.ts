import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginserService {

 
constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:8181//";

  validateLogin(loginValues:any)
  {
    return this.myhttp.get(this.restUrl+"/"+"loan/"+loginValues.email+"/"+loginValues.password);
  }
}
