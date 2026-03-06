import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-content-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './content-card.html',
  styleUrl: './content-card.css',
})
export class ContentCard {
  public readonly title = input.required<string>();
  public readonly content = input.required<string>();
  public readonly detailButton = input.required<string>();
}
