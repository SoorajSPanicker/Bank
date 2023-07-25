import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data="Happy Banking With Us... "
  pdata="Enter the account number"
  loginModelForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  });
  // acno:any=""
  // psw:string=""
  // serviceData:any=""
  constructor(private rou:Router,private ds:DataService,private fb:FormBuilder) { }
  
  // constructor(){ }
  ngOnInit(): void {
    // console.log(this.ds.sData);
    // this.serviceData=this.ds.sData
    

  }
  login(){
    
    if (this.loginModelForm.valid) {
      var path = this.loginModelForm.value;
      var acno = path.acno;
      var psw = path.psw;
      //api call
      this.ds.loginApi(acno,psw).subscribe((response:any)=>{
        alert(`${response.uname} login success`)
        //store uname in local storage
        localStorage.setItem("currentUname",response.uname)
        localStorage.setItem("currentAcno",response.acno)
        this.rou.navigateByUrl("home")
      },
      response=>{
        alert(response.error)
      }
      )
      // if (psw == cpsw) {
      //   this.pswMatch = false;
      // } else {
      //   this.pswMatch = true;
      // }
    } else {
      alert('invalid form');
    }
    
    // this.ds.accessData("hello")
    // this.rou.navigateByUrl("home")
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
