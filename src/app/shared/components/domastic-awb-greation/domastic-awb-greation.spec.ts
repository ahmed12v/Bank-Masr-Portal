import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomasticAwbGreation } from './domastic-awb-greation';

describe('DomasticAwbGreation', () => {
  let component: DomasticAwbGreation;
  let fixture: ComponentFixture<DomasticAwbGreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomasticAwbGreation],
    }).compileComponents();

    fixture = TestBed.createComponent(DomasticAwbGreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
