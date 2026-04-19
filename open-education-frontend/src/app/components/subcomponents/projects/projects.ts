import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-projects',
  imports: [NzCardModule, NzFlexModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
