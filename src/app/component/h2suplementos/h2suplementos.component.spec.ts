import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2suplementosComponent } from './h2suplementos.component';

describe('H2suplementosComponent', () => {
  let component: H2suplementosComponent;
  let fixture: ComponentFixture<H2suplementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H2suplementosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H2suplementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
