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
  psw:string=""
  // constructor(){ }
  // ngOnInit(): void {

  // }
  login(){
    console.log(this.acno);
    console.log(this.psw);
    
    
    // this.acno=a.value
    // this.psw=b.value
    // console.log(a.value);
    // console.log(b.value);
    
    
  }
  // acnoChange(event:any){
  //   // console.log(event.target.value);
  //   this.acno=event.target.value
  //   console.log(this.acno);
    
    

  // }


}
