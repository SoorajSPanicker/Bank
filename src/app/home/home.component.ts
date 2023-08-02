import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any = '';
  acno: any;
  profileData: any = {};
  profileBal: any = {};
  message:any='';
  status:any=true
  shareAcno:any=''
  //MODEL FORM FOR MONEY TRANSFER
  moneyTransferForm = this.fb.group({
    toAcno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
  });
  constructor(
    private rout: Router,
    private ds: DataService,
    private fb: FormBuilder,
    private datePipe:DatePipe
  ) {}
  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("please login first")
      this.rout.navigateByUrl("")
    }
    if (localStorage.getItem('currentUname')) {
      this.user = localStorage.getItem('currentUname');
    }
  }
  logout() {
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUname")
    this.rout.navigateByUrl('');
  }

  profileView() {
    if (localStorage.getItem('currentAcno')) {
      this.acno = localStorage.getItem('currentAcno');
      console.log(this.acno);
    }
    this.ds.getProfile(this.acno).subscribe((response: any) => {
      console.log(response);
      this.profileData = response;
    });
  }
  balanceView() {
    if (localStorage.getItem('currentAcno')) {
      this.acno = localStorage.getItem('currentAcno');
      console.log(this.acno);
    }
    this.ds.getBalance(this.acno).subscribe((response: any) => {
      console.log(response);
      this.profileBal = response;
    });
  }

  transfer() {
    if (this.moneyTransferForm.valid) {
      //from Acno
      if (localStorage.getItem('currentAcno')) {
        this.acno = localStorage.getItem('currentAcno');
        console.log(this.acno);
      }
      var path = this.moneyTransferForm.value;
      //toAcno
      var toAcno = path.toAcno;
      console.log(toAcno);
      //psw
      var psw = path.psw;
      console.log(psw);
      //amount
      var amount = path.amount;
      console.log(amount);
      //date
      var dateTime=new Date()
      var dateData=this.datePipe.transform(dateTime,'short')
      // console.log(dateData);
      //api call
      this.ds.moneyTransferApi(this.acno,toAcno,psw,amount,dateData)
      .subscribe((result:any)=>{
       this.message=result.message
       this.status=true
        
      },
      result=>{
        this.message=result.error.message
        this.status=false
      })
      
    } else {
      alert('Invalid form');
      this.status=false
    }
  }
  statement(){
    this.rout.navigateByUrl("segment")
  }
  deleteAc(){
    //share data
    if(localStorage.getItem('currentAcno')){
      this.shareAcno=localStorage.getItem('currentAcno')
      // console.log(this.shareAcno);
      
    }
  }

  cancel(){
    this.shareAcno=""
  }
  deleteAccount(event:any){
    console.log(event);
    this.ds.acDelete(event).subscribe((result:any)=>{
      alert(`${event} deleted successfully`)
      this.logout()
    })
    
  }
}

