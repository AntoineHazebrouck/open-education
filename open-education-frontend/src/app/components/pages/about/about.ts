import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Row } from '../../subcomponents/row/row';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatDividerModule, Row],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
