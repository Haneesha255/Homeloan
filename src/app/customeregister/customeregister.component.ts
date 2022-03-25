import { Component, OnInit } from '@angular/core';
import { Custform } from '../custform';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customeregister',
  templateUrl: './customeregister.component.html',
  styleUrls: ['./customeregister.component.css']
})
export class CustomeregisterComponent implements OnInit {
  constructor(private rhs:CustomerService) { }

  ngOnInit(): void {
  }
  regiform:Custform=new Custform();
  
  saveRegiform(regiformForm:any)
  {
    this.regiform=regiformForm.value;
    console.log(this.regiform);
    this.rhs.addRegiform(this.regiform).subscribe(
      (data)=>{
        console.log(data);
        alert("Registered Successfully...!")
      },
      (error)=>{
        console.log(error)}
      
    )
  }
}
