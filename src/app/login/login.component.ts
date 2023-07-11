import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Happy Banking With Us... "
  pdata="Enter the account number"
  // constructor(){ }
  // ngOnInit(): void {

  // }
  login(){
    alert("Login Clicked")
  }


}
