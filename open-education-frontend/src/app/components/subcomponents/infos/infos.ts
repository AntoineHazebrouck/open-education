import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-infos',
  imports: [NzIconModule, NzGridModule, NzButtonModule],
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {}
