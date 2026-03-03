import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-content-section-card',
  imports: [MatCardModule],
  templateUrl: './content-section-card.html',
  styleUrl: './content-section-card.css',
})
export class ContentSectionCard {
  public readonly title = input.required<string>();
  public readonly subtitle = input.required<string>();
}
