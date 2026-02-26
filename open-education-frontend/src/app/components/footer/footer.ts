import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  imports: [MatToolbar, MatToolbarModule,  MatIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
