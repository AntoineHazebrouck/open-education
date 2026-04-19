import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-questions',
  imports: [NzCollapseModule],
  templateUrl: './questions.html',
  styleUrl: './questions.css',
})
export class Questions {}
