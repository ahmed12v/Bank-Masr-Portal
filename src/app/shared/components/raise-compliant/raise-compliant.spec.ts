import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseCompliant } from './raise-compliant';

describe('RaiseCompliant', () => {
  let component: RaiseCompliant;
  let fixture: ComponentFixture<RaiseCompliant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaiseCompliant],
    }).compileComponents();

    fixture = TestBed.createComponent(RaiseCompliant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
