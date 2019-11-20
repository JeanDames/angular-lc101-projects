import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos I Like';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.kuoni.co.uk/upload/inspiration/stephen/bio-plankton/bp1.jpg';
  image3 = 'http://www.lllstl.org/wp-content/uploads/2018/07/MOBOT-Morning.jpg';

  constructor() { }

  ngOnInit() {
  }

}