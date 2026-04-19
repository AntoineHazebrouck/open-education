import { Component } from '@angular/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ClassesCard } from '../../subcomponents/classes-card/classes-card';
import { Slideshow } from '../../subcomponents/slideshow/slideshow';

@Component({
  selector: 'app-home',
  imports: [
    NzCardModule,
    NzFlexModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzBadgeModule,
    NzCollapseModule,
    Slideshow,
    ClassesCard,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
