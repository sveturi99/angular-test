import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  windowAll;

  constructor(private window: Window) {
    this.windowAll =window;
  }

  doChange(event) {
    alert('change');
    console.log(event.target);
  }

  doModelChange(event) {
    alert('model change');
    console.log(event.target);
  }

  doPaste(event) {
    alert('event change');
    console.log(event.target);
  }

  doInput(event) {
    var myData = (event.clipboardData || this.windowAll['clipboardData']).getData('text'); ;
    alert('input change '+myData);
    console.log(event.target);
  }
}
