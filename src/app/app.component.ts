import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample';
  test: boolean;
  maxlength: number;

  ngOnInit(): void {
    this.test = true;
    this.maxlength = 6;
  }
  
  doChange(event) {
    alert('change');
    console.log(event.target);
    this.maxlength = 1;
  }

  doModelChange(event) {
    alert('model change');
    console.log(event.target);
    this.maxlength = 1;
  }

  doPaste(event) {
    alert('event change');
    console.log(event.target);
  }

  doFocus(event, e) {
    var myData = (event.clipboardData || window['clipboardData']).getData('text'); ;
    alert('input change '+myData);
    console.log(event.target);
    console.log(e);
    this.maxlength = 1;
  }

  doInput(event, e) {
    var myData = (event.clipboardData || window['clipboardData']).getData('text'); ;
    alert('input change '+myData);
    console.log(event.target);
    console.log(e);
    this.maxlength = 1;
  }
}
