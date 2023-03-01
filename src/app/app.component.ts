import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  //array of months.
  months = ["January", "Feburary", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable = true;
  myClickFunction() {
  //just added console.log which will display the event details in browser on click of the button.
  // alert("Button is clicked");
  this.isavailable = !this.isavailable;
  console.log('ABC');
}
}
