import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
