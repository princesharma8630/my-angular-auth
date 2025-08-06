import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule , FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule , RouterModule , RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  signupform :FormGroup;
  submitted =false;
  passfleg=false;

  constructor(private fb :FormBuilder){
    this.signupform =this.fb.group({
      name :['', [Validators.required , Validators.minLength(3)]],
      email:['',[Validators.required , Validators.email]],
      password :['' , [Validators.required, Validators.minLength(8)] ],
      confirmPassword:['',[Validators.required , Validators.minLength(8)] 
    ],

    }
  );
  }


  onsignup(){
    this.submitted=true;

 const password = this.signupform.get('password')?.value;
  const confirm = this.signupform.get('confirmPassword')?.value;
    if(this.signupform.valid){
      console.log('signup succesfully ');
      alert(` Signup Success✨ \n,
             Name: ${this.signupform.get('name')?.value},
             Email: ${this.signupform.get('email')?.value} , 
             Password :${this.signupform.get('password')?.value};
        
        `);
    }
    if(password!==confirm)
       {this.signupform.get('password')?.reset();
         this.signupform.get('confirmPassword')?.reset();
        alert("password does not match");
        }
  
    else{
      
      console.log("invalid form");
    }
  }

 

 
}
