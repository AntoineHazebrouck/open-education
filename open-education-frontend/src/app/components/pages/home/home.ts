import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContentCard } from '../../subcomponents/content-card/content-card';
import { ContentSectionCard } from '../../subcomponents/content-section-card/content-section-card';
import { ContentSection } from '../../subcomponents/content-section/content-section';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ContentCard,
    ContentSection,
    ContentSectionCard,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected onClick() {
    window.open('https://www.helloasso.com/associations/assodesjeunes4205/formulaires/1', '_blank');
  }
}
