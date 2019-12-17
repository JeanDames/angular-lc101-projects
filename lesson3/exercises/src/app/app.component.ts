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
  takeOffEnabled: boolean = true;

handleTakeOff() {
  let result = window.confirm("Are you sure the shuttle is ready for takeoff?");
  if(result) {
    this.color = 'blue';
    this.height = 10000;
    this.width = 0;
    this.message = "Shuttle in flight.";
    this.takeOffEnabled = false;
  }
}

  handleLanding(rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Do you want to abort this mission?");
    if(result) {
      this.message = "Mission aborted.";
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if(direction === 'right' && this.width <= 259999) {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if(direction === 'up' && this.height <= 339999) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    } else if(direction === 'left' && this.width >= -1999) {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } else if(direction === 'down' && this.height >= 10001) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

  warning() {
    if(this.takeOffEnabled === false && this.height >= 320000 || this.height <= 10000 || this.width < 0 || this.width >= 240000){
      this.color ='orange';
    } else {
      this.color = 'blue';
    }
  }
}
