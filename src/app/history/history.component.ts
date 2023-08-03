import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  acno:any
  transactions:any
  date:any
  searchKey:any=""
  constructor(private ds:DataService,private rou:Router){}
  ngOnInit():void{
    //date
    this.date=new Date()
    //acno
    if(localStorage.getItem("currentAcno")){
      this.acno=localStorage.getItem("currentAcno")
    }
  this.ds.transactionHistory(this.acno).subscribe((result:any)=>{
    this.transactions=result
    console.log(this.transactions);
    
  })
  }
  home(){
    this.rou.navigateByUrl("home")
  }
  searchKeyChange(key:any){
    this.searchKey=key
  }
  convertPdf(){
    // create an object for jsPDF
    var pdf=new jspdf()
    //set columns
    let col=["Transaction Type","Amount","Account Holder Name","Date"]
    //row
    let row:any=[]
    // style set

    //size
    pdf.setFontSize(16)
    //title
    pdf.text("Account Statement",15,10)
    //text color
    pdf.setTextColor(99)
    //font size reset
    pdf.setFontSize(12)
    //array of objects convert to array of array(nested array)
    var allItems=this.transactions
    for(let i of allItems){
      let rowData=[i.type,i.amount,i.user,i.date]
      row.push(rowData)
    }
    //nested array convert to pdf
    (pdf as any).autoTable(col,row,{startY:15})
    //Open pdf into a new window
    pdf.output('dataurlnewwindow')
    // //pdf download
    // pdf.save('ministatement.pdf')

  }

}
