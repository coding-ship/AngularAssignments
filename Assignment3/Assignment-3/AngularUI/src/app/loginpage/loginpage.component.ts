import { Component, OnInit, Output } from '@angular/core';
import {User} from '../userModel'; 
import { FormsModule} from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  value:any;
  users = {name: '', password: ''};

 
constructor(private auth:AuthService,private router:Router){}
onSubmit(user:User) {
 
    
    // this.auth.getdata(user).subscribe(response=>{ console.log(response.status);});
    this.auth.getdata(user).subscribe(response=>{ this.value=response},(error:Response)=>{
      if(error.status==200){ console.log("authenticated");
     
      //this.router.navigateByUrl('/home');
    this.router.navigate(['/home']);
     
    }
      else{ console.log("unauthorized");
      
     
    }
    } );
   
   
}

Signup(){
  
  this.router.navigate(['/signup']);
}



}
