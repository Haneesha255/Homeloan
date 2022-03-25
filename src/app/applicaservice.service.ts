import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Applicaclass } from './applicaclass';

@Injectable({
  providedIn: 'root'
})
export class ApplicaserviceService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:8181/rest/api/";
  getAllRegiform()
  {
    return this.myhttp.get(this.restUrl+"/applications")

  }
  addRegiform(ab:Applicaclass)
  {
    return this.myhttp.post(this.restUrl+"/applications",ab)
  }
 
}