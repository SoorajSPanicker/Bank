import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//overloading headers
const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  // sData="data inside service file"

  constructor(private http:HttpClient) { }
  //method to add token in api header
  createHeader(){
    // httpHeaders
    const headers=new HttpHeaders()
    //access token from ls
    if(localStorage.getItem("token")){
      var token=JSON.parse(localStorage.getItem("token") || "")
      //add token into header
      options.headers=headers.append('access_token',token)
    }
    return options
  }

  // accessData(data:any){
  //   console.log(data);
  // }
  //register api
  signupApi(acno:any,uname:any,psw:any){
    const bodyData={                                   //bodyData is just a variable
      acno,
      uname,
      psw
    } 
    return this.http.post('https://bankserver-v70b.onrender.com/bankuser/user-register',bodyData)
  }
  //login api
  loginApi(acno:any,psw:any){
    const bodyData={
      acno,psw
    }
    return this.http.post('https://bankserver-v70b.onrender.com/bankuser/user-login',bodyData)
  }
  //get user profile details
  getProfile(acno:any){
    return this.http.get('https://bankserver-v70b.onrender.com/bankuser/user-profile/'+acno,this.createHeader())
  }
  //get balance details
  getBalance(acno:any){
    return this.http.get('https://bankserver-v70b.onrender.com/bankuser/bal-enquiry/'+acno,this.createHeader())
  }
  //money transfer
  //fromAcno,toAcno,fromAcnoPsw,amount,DateAndTime
  moneyTransferApi(fromAcno:any,toAcno:any,psw:any,amount:any,date:any){
    const bodyData={
      fromAcno,toAcno,psw,amount,date
    }
    return this.http.post('https://bankserver-v70b.onrender.com/bankuser/money-transfer',bodyData,this.createHeader())
  }

  //transaction history api
  transactionHistory(acno:any){
    return this.http.get('https://bankserver-v70b.onrender.com/bankuser/user-history/'+acno,this.createHeader())
  }
  //delete account api
  acDelete(acno:any){
    return this.http.delete('https://bankserver-v70b.onrender.com/bankuser/user-delete/'+acno,this.createHeader())
  }



}

