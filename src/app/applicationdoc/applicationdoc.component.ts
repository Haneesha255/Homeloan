import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicaclass } from '../applicaclass';
import { ApplicaserviceService } from '../applicaservice.service';

@Component({
  selector: 'app-applicationdoc',
  templateUrl: './applicationdoc.component.html',
  styleUrls: ['./applicationdoc.component.css']
})
export class ApplicationdocComponent implements OnInit {
  myrouter: any;
  constructor(private rhs:ApplicaserviceService) { }

  ngOnInit(): void {
  }
  regiform:Applicaclass=new Applicaclass();
  
  saveform(regiformForm:any)
  {
    this.regiform=regiformForm.value;
    console.log(this.regiform);
    this.rhs.addRegiform(this.regiform).subscribe(
      (data)=>{
        console.log(data);
        
          this.myrouter.navigate(['\documents']);
        alert("Application in Progress!")
      },
      (error)=>{
        console.log(error)}
      
    )
  }
  
  }

