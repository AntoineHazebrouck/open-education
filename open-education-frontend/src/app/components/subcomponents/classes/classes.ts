import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { ClassesCard } from '../../subcomponents/classes-card/classes-card';

@Component({
  selector: 'app-classes',
  imports: [NzFlexModule, ClassesCard],
  templateUrl: './classes.html',
  styleUrl: './classes.css',
})
export class Classes {}
