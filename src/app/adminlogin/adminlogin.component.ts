import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginserService } from '../adminloginser.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private phs:AdminloginserService,private myrouter:Router) { }

ngOnInit(): void {
}
loginValues:any;
loginValid:any;
validateLogin(loginForm:any)
{
  console.log(loginForm.value);
  this.loginValues=loginForm.value;
  console.log(this.loginValues);
  
  this.phs.validateLogin(this.loginValues).subscribe(
    (data)=>
    {
        console.log(data);
        this.loginValid=data;
        if(this.loginValid)
          {
              localStorage.setItem("email",this.loginValues.email);
              //this.myrouter.navigate(['\app']);
              alert("Logined Successfully");
          }
          else
          {
            alert("User Invalid");
          }
    }
  )
}
}