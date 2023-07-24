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
  // signupApi(acno:any,uname:any,psw:any){
  //   const bodyData={                                   //bodyData is just a variable
  //     acno,
  //     uname,
  //     psw
  //   } 
  //   return this.http.post('http://localhost:3000/bankuser/user-register',bodyData)
  // }
}

