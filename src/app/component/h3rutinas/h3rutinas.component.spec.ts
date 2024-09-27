import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3rutinasComponent } from './h3rutinas.component';

describe('H3rutinasComponent', () => {
  let component: H3rutinasComponent;
  let fixture: ComponentFixture<H3rutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H3rutinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H3rutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
