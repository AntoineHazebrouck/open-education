import { Component, input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';


@Component({
  selector: 'app-content-card',
  imports: [NzCardModule, NzButtonModule],
  templateUrl: './content-card.html',
  styleUrl: './content-card.css',
})
export class ContentCard {
  public readonly title = input.required<string>();
  public readonly subtitle = input<string>();
  public readonly content = input.required<string>();
  public readonly detailButton = input.required<string>();
  public readonly metadataRow1 = input<string>();
  public readonly metadataRow2 = input<string>();
}
