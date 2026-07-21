import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaryComp } from './quary-comp';

describe('QuaryComp', () => {
  let component: QuaryComp;
  let fixture: ComponentFixture<QuaryComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuaryComp],
    }).compileComponents();

    fixture = TestBed.createComponent(QuaryComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
