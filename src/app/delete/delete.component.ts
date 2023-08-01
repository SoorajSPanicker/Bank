import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  //create a variable to accept the data from parent component
  @Input() childAcno:String|undefined
  @Output() onCancel=new EventEmitter()
  @Output() onDelete=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  noClick(){
    this.onCancel.emit()

  }
  acDelete(){
    this.onDelete.emit(this.childAcno)
  }
  
}
