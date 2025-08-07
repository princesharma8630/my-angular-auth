import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule , RouterModule , CommonModule ],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPassword {
  resetform :FormGroup;
  submited=false;
  showPassword=false;


  constructor(private fb :FormBuilder , private router :Router){
    this.resetform = this.fb.group({
      password :['',[Validators.required , Validators.minLength(8)]],
      confirm : ['' , [Validators.required]]
    })

    
  }
onreset(){
  this.submited=true;
        const p1 = this.resetform.get('password')?.value;
        const p2 = this.resetform.get('confirm')?.value;
      if(p1===p2 && this.resetform.valid){
        console.log("password reset ");
        alert(`Your password has been reset successfully.\n Your new password :${p1}`);
        this.router.navigate(['/login']);

      }
      else{
      if(this.resetform.valid)
      {
        alert(`Password did not match\n Please try again`);
        
       this.resetform.get('password')?.reset();
        this.resetform.get('confirm')?.reset();
      }}
    }
}
