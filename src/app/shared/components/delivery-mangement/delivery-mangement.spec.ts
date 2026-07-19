import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMangement } from './delivery-mangement';

describe('DeliveryMangement', () => {
  let component: DeliveryMangement;
  let fixture: ComponentFixture<DeliveryMangement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryMangement],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryMangement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
