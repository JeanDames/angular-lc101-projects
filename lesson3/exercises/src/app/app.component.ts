import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

takeOff() {
  let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff");
  if(confirmation){
    this.message = "Shuttle in flight.";
    this.color = 'blue';
    this.height += 10000;
  }
  return confirmation;
}
}
