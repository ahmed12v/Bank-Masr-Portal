import { Component } from '@angular/core';

@Component({
  selector: 'app-domastic-awb-greation',
  imports: [],
  templateUrl: './domastic-awb-greation.html',
  styleUrl: './domastic-awb-greation.css',
})
export class DomasticAwbGreation {
   model = {
    // Shipper
    airwaybillNo: '',
    shipperName: '',
    shipperContactPerson: '',
    shipperAddress1: '',
    shipperAddress2: '',
    originCity: '',
    shipperPhone: '',
    shipperMobile: '',

    // Consignee
    customerAccountCode: 'D77777',
    consigneeName: '',
    consigneeContactPerson: '',
    deliveryAddress1: '',
    deliveryAddress2: '',
    destinationCity: '',
    consigneePhone: '',
    consigneeMobile: '',

    // Logistics
    billingDate: this.today(),
    shipperReference: '',
    productType: '',
    serviceLevel: '',
    totalPiecesCount: 1,
    actualWeight: '',
    length: '',
    width: '',
    height: '',
    volumetricWeight: '',
    chargableWeight: '',
    codCashToCollect: '',
    printFormatOutput: 'A4 Standard Sheet',
    goodsDescription: ''
  };

  cities = ['Cairo', 'Giza', 'Alexandria', 'Mansoura', 'Tanta'];
  productTypes = ['Document', 'Parcel', 'Pallet', 'Fragile'];
  serviceLevels = ['Standard', 'Express', 'Same Day'];
  printFormats = ['A4 Standard Sheet', 'Thermal 4x6', 'A5 Half Sheet'];

  private today(): string {
    return new Date().toISOString().substring(0, 10);
  }

  onSubmitBill(): void {
    console.log('Submit Bill', this.model);
  }

  onPrint(): void {
    window.print();
  }

  onAddNotes(): void {
    console.log('Add Notes clicked');
  }

  onClearForm(): void {
    this.model = {
      airwaybillNo: '', shipperName: '', shipperContactPerson: '', shipperAddress1: '',
      shipperAddress2: '', originCity: '', shipperPhone: '', shipperMobile: '',
      customerAccountCode: 'D77777', consigneeName: '', consigneeContactPerson: '',
      deliveryAddress1: '', deliveryAddress2: '', destinationCity: '', consigneePhone: '',
      consigneeMobile: '', billingDate: this.today(), shipperReference: '', productType: '',
      serviceLevel: '', totalPiecesCount: 1, actualWeight: '', length: '', width: '', height: '',
      volumetricWeight: '', chargableWeight: '', codCashToCollect: '',
      printFormatOutput: 'A4 Standard Sheet', goodsDescription: ''
    };
  }
}
