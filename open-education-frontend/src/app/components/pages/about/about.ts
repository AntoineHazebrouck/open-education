import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzImageModule } from 'ng-zorro-antd/image';
import { Slideshow } from '../../subcomponents/slideshow/slideshow';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
// import { MatCardModule } from '@angular/material/card';
// import { MatDividerModule } from '@angular/material/divider';
// import { Row } from '../../subcomponents/row/row';
// import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-about',
  imports: [NzFlexModule, NzImageModule, NzCardModule, NzCarouselModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
