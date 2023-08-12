import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  title:string="login-page";

  loginForm= new FormGroup({
    email:new FormControl('' , [Validators.email,Validators.required,Validators.pattern('[a-zA-Z]')]),
    password:new FormControl('' ,[Validators.required,Validators.minLength(8)]),
  });

  
  loginUser(){
    console.warn(this.loginForm.value)
  }


get email(){
  return this.loginForm.get('email')
}

get password(){
  return this.loginForm.get('password')
}





}
