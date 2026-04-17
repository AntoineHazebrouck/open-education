import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-slideshow',
  imports: [NzCarouselModule],
  templateUrl: './slideshow.html',
  styleUrl: './slideshow.css',
  schemas: [],
})
export class Slideshow {}
