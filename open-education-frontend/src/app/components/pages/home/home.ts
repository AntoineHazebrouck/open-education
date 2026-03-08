import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Center } from '../../subcomponents/center/center';
import { ContentCard } from '../../subcomponents/content-card/content-card';
import { Row } from '../../subcomponents/row/row';
import { Slideshow } from '../../subcomponents/slideshow/slideshow';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ContentCard,
    MatIconModule,
    Row,
    Center,
    MatExpansionModule,
    Slideshow,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
