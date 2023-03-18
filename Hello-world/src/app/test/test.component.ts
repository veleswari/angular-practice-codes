import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: 
  `<h1>hello{{name}}</h1>
   <input #myInput type="text"/>
   <button (click)="logMessage(myInput.value)">login</button>
   <button (click)="fireEvent()">Send to parent component</button>
   <h2>Today is {{date | date :'short'}}</h2>
   <h2>{{date | date :'shortTime'}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  public date = new Date();

  @Input('parentData') public name: any;

  @Output() public childEvent = new EventEmitter;

  fireEvent(){
    this.childEvent.emit("hey root component");
  }


  constructor(){}
  ngOnInit(): void {}

  logMessage(value: any){
    console.log(value)
  }

}
