import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  imports: [NzCardModule, NzFlexModule, NzCarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
