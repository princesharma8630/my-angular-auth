import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { ResetPassword } from './auth/reset-password/reset-password';
import { ForgetPassword } from './auth/forget-password/forget-password';

export const routes: Routes = [
   {path:'login' , component:Login} , 
   {path:'signup' , component:Signup},
    {path: 'reset-pass', component:ResetPassword},
     {path: 'forget-pass', component:ForgetPassword},
     {path:'' , redirectTo:'login' , pathMatch:'full'}
];
