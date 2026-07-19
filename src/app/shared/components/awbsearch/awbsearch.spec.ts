import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AWBsearch } from './awbsearch';

describe('AWBsearch', () => {
  let component: AWBsearch;
  let fixture: ComponentFixture<AWBsearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AWBsearch],
    }).compileComponents();

    fixture = TestBed.createComponent(AWBsearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
