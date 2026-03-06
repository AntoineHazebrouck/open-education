import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ContentCard } from '../../subcomponents/content-card/content-card';
import { Row } from '../../subcomponents/row/row';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, MatGridListModule, ContentCard, MatIconModule, Row],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected onClick() {
    window.open('https://www.helloasso.com/associations/assodesjeunes4205/formulaires/1', '_blank');
  }
}
