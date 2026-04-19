import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-slideshow',
  imports: [NzCarouselModule, NzFlexModule],
  templateUrl: './slideshow.html',
  styleUrl: './slideshow.css',
  schemas: [],
})
export class Slideshow {}
