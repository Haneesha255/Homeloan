import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserService } from '../loginser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private bhs:LoginserService,private myrouter:Router) { }

  ngOnInit(): void {
  }
  loginValues:any;
  loginValid:any;
  validateLogin(loginForm:any)
  {
    console.log(loginForm.value);
    this.loginValues=loginForm.value;
    console.log(this.loginValues);
    
    this.bhs.validateLogin(this.loginValues).subscribe(
      (data)=>{
        console.log(data);
        this.loginValid=data;
        if(this.loginValid)
        {
          localStorage.setItem("email",this.loginValues.email);
                this.myrouter.navigate(['\applicationdoc']);
                alert("logined succes");
        }
        else
        {
          alert("User Invalid");
        }
      }
    )
     
      }
    
  }