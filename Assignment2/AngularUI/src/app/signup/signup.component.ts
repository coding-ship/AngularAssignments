import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

import { CustomerService } from './../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  value:any;
  cust = {fname: '', lname: '',phone: '',role:'User'};
  constructor(private Customerservice:CustomerService,private router:Router) { }
  ngOnInit(): void {
  }
  onsubmit(customer:Customer){
    
    window.alert("Account Successfully Created Now You Can Login!");
    console.log(customer);
    console.log(customer.fname);
    console.log(customer.lname);
    console.log(customer.phone);
    console.log(customer.role);
    //this.Customerservice.adduser(customer);
    this.Customerservice.adduser(customer).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
    this.router.navigate(['/']);
    

  }


}
