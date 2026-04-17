import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Slideshow } from '../../subcomponents/slideshow/slideshow';

@Component({
  selector: 'app-home',
  imports: [NzCardModule, NzFlexModule, NzButtonModule, NzGridModule, NzIconModule, Slideshow],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
