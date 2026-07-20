import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-mangement',
  imports: [CommonModule],
  templateUrl: './delivery-mangement.html',
  styleUrl: './delivery-mangement.css',
})
export class DeliveryMangement {
   deliveryOption: 'pickup' | 'schedule' = 'schedule';

  model = {
    awbNo: '',
    date: this.today(),
    consignee: '',
    currentAddress: '',
    scheduleConsigneeName: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    preferredDate: '',
    preferredTime: '',
    specialInstruction: ''
  };

  cities = ['Cairo', 'Giza', 'Alexandria', 'Mansoura', 'Tanta'];

  private today(): string {
    const d = new Date();
    return d.toISOString().substring(0, 10);
  }

  selectDeliveryOption(option: 'pickup' | 'schedule'): void {
    this.deliveryOption = option;
  }

  onSave(): void {
    console.log('Saved data:', this.model, this.deliveryOption);
    // TODO: call your service here
  }
}
