import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   buttonStatus: boolean[] = [false, false, false];

   constructor() { }

   ngOnInit() { }

activateButtons() {
   if(let i=0; i<this.buttonStatus.length; i++) {
      this.buttonStatus[i] = true;
   }
}

}
