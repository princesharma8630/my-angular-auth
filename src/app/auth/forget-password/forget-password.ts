import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule , RouterModule , CommonModule , FormsModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss'
})
export class ForgetPassword {
  emailform :FormGroup;
  submitted=false;
  enterOTP =false;
  OTP:String='';

  constructor(private fb:FormBuilder , private router :Router){
    this.emailform = this.fb.group({
      email:['' , [Validators.required , Validators.email]]
    });
  }

  onSendOtp(){
    this.submitted=true;
    if(this.emailform.valid){
      const email =this.emailform.get('email')?.value;
      alert(`OTP sent to ${email}` );
      this.enterOTP=true;
    }
    else{
      alert('please enter the valid email id ');
    }
  }

  check(){
    console.log(this.OTP);
    if(this.OTP == '8630'){
        alert('done');
        this.router.navigate(['/reset-pass']);
    }
    else{
      alert('invalid OTP');
    }
  }


}
