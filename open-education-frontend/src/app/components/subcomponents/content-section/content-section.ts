import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content-section',
  imports: [MatButtonModule],
  templateUrl: './content-section.html',
  styleUrl: './content-section.css',
})
export class ContentSection {
  public readonly title = input.required<string>();
  public readonly subtitle = input<string>();
}
