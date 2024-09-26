import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSuplementosComponent } from './cards-suplementos.component';

describe('CardsSuplementosComponent', () => {
  let component: CardsSuplementosComponent;
  let fixture: ComponentFixture<CardsSuplementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSuplementosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsSuplementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
