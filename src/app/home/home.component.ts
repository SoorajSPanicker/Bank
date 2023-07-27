import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any=""
  acno:any
  profileData:any={}
  profileBal:any={}
  //MODEL FORM FOR MONEY TRANSFER
  moneyTransferForm=this.fb.group({
    toAcno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })
  constructor(private rout:Router,private ds:DataService,private fb:FormBuilder){ }
  ngOnInit(): void {
    if(localStorage.getItem("currentUname")){
      this.user=localStorage.getItem("currentUname")
    }
  }
  logout(){
    this.rout.navigateByUrl("")
  }

  profileView(){
    if(localStorage.getItem("currentAcno")){
      this.acno=localStorage.getItem("currentAcno")
      console.log(this.acno);

    }
    this.ds.getProfile(this.acno).subscribe((response:any)=>{
      console.log(response);
      this.profileData=response


    })
  }
  balanceView(){
    if(localStorage.getItem("currentAcno")){
      this.acno=localStorage.getItem("currentAcno")
      console.log(this.acno);
      
    }
    this.ds.getBalance(this.acno).subscribe((response:any)=>{
      console.log(response);
      this.profileBal=response
      
    })
  }
  

}


