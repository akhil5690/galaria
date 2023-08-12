import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {

  registerForm=new FormGroup({

    name: new FormControl('',[Validators.required]),
  
    email: new FormControl('',[Validators.email,Validators.required,]),
  
    DOB : new FormControl('',[Validators.required,]),
  
    pincode: new FormControl('',[Validators.required,]),
  
    password: new FormControl('',[Validators.required,]),
  
    confirmpassword: new FormControl('',[Validators.required,]),
  
  });
  
  
  OnSubmit(){
    console.log(this.registerForm)
  }
  
  
  
  get name(): any {
    return this.registerForm.get('name');
  }
  get email(): any {
    return this.registerForm.get('email');
  }
  get DOB(): any {
    return this.registerForm.get('DOB');
  }
  get pincode(): any {
    return this.registerForm.get('pincode');
  }
  get password(): any {
    return this.registerForm.get('password');
  }
  get confirmpassword(): any {
    return this.registerForm.get('confirmpassword');
  }
  
  clearInputMethod(){
    this.name.reset();
    this.email.reset();
    this.DOB.reset();
    this.pincode.reset();
    this.password.reset();
    this.confirmpassword.reset();
  }
  

}
