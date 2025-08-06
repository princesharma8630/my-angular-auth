import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ ReactiveFormsModule , CommonModule ,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
loginform :FormGroup;
submitted =false;
constructor(private fb : FormBuilder)
  {
    this.loginform = this.fb.group({
      email:['',[ Validators.required , Validators.email]],
      password:['' , [Validators.required , Validators.minLength(8)]]
    })
  }
   ngOnInit() {
    this.loginform.get('email')?.valueChanges.subscribe(() => {
      this.submitted = false;
    });

    this.loginform.get('password')?.valueChanges.subscribe(() => {
      this.submitted = false;
    });
  }
  onlogin(){
    this.submitted=true;
    if(this.loginform.valid){
      console.log("login data" ,this.loginform.value );
    }
    else{
      console.log("invalid data ");
    }
  }

}
