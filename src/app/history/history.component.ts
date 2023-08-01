import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  acno:any
  transactions:any
  constructor(private ds:DataService){}
  ngOnInit():void{
    //acno
    if(localStorage.getItem("currentAcno")){
      this.acno=localStorage.getItem("currentAcno")
    }
  this.ds.transactionHistory(this.acno).subscribe((result:any)=>{
    this.transactions=result
    console.log(this.transactions);
    
  })
  }

}
