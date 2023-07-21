import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data="Happy Banking With Us... "
  pdata="Enter the account number"
  acno:any=""
  psw:string=""
  // serviceData:any=""
  constructor(private rou:Router,private ds:DataService) { }
  // constructor(){ }
  ngOnInit(): void {
    // console.log(this.ds.sData);
    // this.serviceData=this.ds.sData
    

  }
  login(){
    // this.ds.accessData("hello")
    this.rou.navigateByUrl("home")
    // console.log(this.acno);
    // console.log(this.psw);
    
    
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
