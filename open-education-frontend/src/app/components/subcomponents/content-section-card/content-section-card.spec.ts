import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionCard } from './content-section-card';

describe('ContentSectionCard', () => {
  let component: ContentSectionCard;
  let fixture: ComponentFixture<ContentSectionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSectionCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentSectionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
