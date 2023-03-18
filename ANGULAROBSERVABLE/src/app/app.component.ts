import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ANGULAROBSERVABLE';

  myObservable = new Observable((observer) => {
    setTimeout(() => {observer.next("1")}, 1000);
    setTimeout(() => {observer.next("2")}, 2000);
    //setTimeout(() => {observer.error(new Error('something went wrong!!'))}, 3000);
    setTimeout(() => {observer.next("3")}, 4000);
    setTimeout(() => {observer.next("4")}, 5000);
    setTimeout(() => {observer.complete()}, 6000);
  });
  ngOnInit(){
    this.myObservable.subscribe(
      (val)=>{console.log(val)},
      (error) => {alert("something went wrong!!")},
      () => {console.log("observable completed it's work")}
      );
  }
}
