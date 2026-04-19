import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-classes-card',
  imports: [
    NzCardModule,
    NzFlexModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzBadgeModule,
    NgTemplateOutlet,
  ],
  templateUrl: './classes-card.html',
  styleUrl: './classes-card.css',
})
export class ClassesCard {
  title = input.required<string>();
  text = input.required<string>();
  isFree = input.required<boolean>();
  isInPerson = input.required<boolean>();
}
