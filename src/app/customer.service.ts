import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Custform } from './custform';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:8181/customers";
  getAllRegiform()
  {
    return this.myhttp.get(this.restUrl+"/customer")

  }
  addRegiform(veh:Custform)
  {
    return this.myhttp.post(this.restUrl+"/customer",veh)
  }
 
}

