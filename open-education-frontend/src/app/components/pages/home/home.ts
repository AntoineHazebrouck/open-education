import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected onClick() {
    window.open('https://www.helloasso.com/associations/assodesjeunes4205/formulaires/1', '_blank');
  }
}
