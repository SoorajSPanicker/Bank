import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // sData="data inside service file"

  constructor(private http:HttpClient) { }
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
    return this.http.post('http://localhost:3000/bankuser/user-register',bodyData)
  }
  //login api
  loginApi(acno:any,psw:any){
    const bodyData={
      acno,psw
    }
    return this.http.post('http://localhost:3000/bankuser/user-login',bodyData)
  }
  //get user profile details
  getProfile(acno:any){
    return this.http.get('http://localhost:3000/bankuser/user-profile/'+acno)
  }
  //get balance details
  getBalance(acno:any){
    return this.http.get('http://localhost:3000/bankuser/bal-enquiry/'+acno)
  }
  //money transfer
  //fromAcno,toAcno,fromAcnoPsw,amount,DateAndTime
  moneyTransferApi(fromAcno:any,toAcno:any,psw:any,amount:any,date:any){
    const bodyData={
      fromAcno,toAcno,psw,amount,date
    }
    return this.http.post('http://localhost:3000/bankuser/money-transfer',bodyData)
  }
}

