import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  pswMatch: boolean = false;
  //model for signup form
  signUpModelForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  });

  constructor(private rout: Router, private fb: FormBuilder,private ds:DataService) {}
  //methods
  signup() {
    var path = this.signUpModelForm.value;
    var acno = path.acno;
    var uname = path.uname;
    var psw = path.psw;
    var cpsw = path.cpsw;
    if (this.signUpModelForm.valid) {
      if (psw == cpsw) {
        this.pswMatch = false;
        this.ds.signupApi(acno,uname,psw).subscribe((response:any)=>{
          // console.log(response);
          //alert
          alert(`${response.uname} registered...`)
          this.rout.navigateByUrl("")
          
        },
        response=>{
          alert(response.error)
        }
        )
      } else {
        this.pswMatch = true;
      }
    } else {
      alert('invalid form');
    }

    // alert("signup worked")
    // this.rout.navigateByUrl("")
  }
}
