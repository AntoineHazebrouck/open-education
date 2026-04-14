import { Component, input } from '@angular/core';

@Component({
  selector: 'app-content-section',
  imports: [],
  templateUrl: './content-section.html',
  styleUrl: './content-section.css',
})
export class ContentSection {
  public readonly title = input.required<string>();
  public readonly subtitle = input<string>();
}
