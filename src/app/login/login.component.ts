import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Happy Banking With Us... "
  pdata="Enter the account number"
  acno:any=""
  // constructor(){ }
  // ngOnInit(): void {

  // }
  login(){
    alert("Login Clicked")
  }
  acnoChange(event:any){
    // console.log(event.target.value);
    this.acno=event.target.value
    console.log(this.acno);
    
    

  }


}
