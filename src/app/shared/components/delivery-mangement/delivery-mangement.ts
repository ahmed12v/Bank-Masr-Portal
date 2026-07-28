import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { StateService } from '../../../core/State/awbState';
import { ShipmentStateService } from '../../../core/State/consigneState';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery-mangement',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './delivery-mangement.html',
  styleUrl: './delivery-mangement.css',
})
export class DeliveryMangement {
  constructor(private _awbstate:StateService , private shipmentState:ShipmentStateService){
    effect(()=>{
      this.deliveryForm.patchValue({
        DelvLocInfoData:{
          cl_AWBNo:this._awbstate.awbNum()
        }
      })
    });
    effect(()=>{
      const consignee = this.parseConsigneeDetails(
        this.shipmentState.shipment()?.ConsigneeDetails || ''
      );
      this.deliveryForm.patchValue({
        DelvLocInfoData:{
          cl_Consignee:consignee.name,
          cl_ConsigneeAddress:consignee.address
        }
      })
    })

  }
  parseConsigneeDetails(details: string) {
  if (!details) {
    return {
      name: '',
      address: '',
      phone: ''
    };
  }

  const parts = details.split(',');

  return {
    name: parts[0]?.trim() || '',
    phone: parts[parts.length - 1]?.trim() || '',
    address: parts.slice(1, -1).join(', ').trim()
  };
}
  deliveryOption: 'pickup' | 'schedule' = 'schedule';
  cities = ['Cairo', 'Giza', 'Alexandria', 'Mansoura', 'Tanta'];
  today = new Date().toISOString().split('T')[0];


  selectDeliveryOption(option: 'pickup' | 'schedule'): void {
    this.deliveryOption = option;
  }
  //#region updateForm
 deliveryForm = new FormGroup({
  UserID: new FormControl(''),
  UserPwd: new FormControl(''),
  Database: new FormControl(null),

  DelvLocInfoData: new FormGroup({
    cl_AWBNo: new FormControl(''),
    cl_Consignee: new FormControl(''),
    cl_ConsigneeName: new FormControl(''),
    cl_ConsigneeAddress: new FormControl(''),
    cl_ConsigneeAddress1: new FormControl(''),
    cl_ConsigneeAddress2: new FormControl(''),
    cl_ConsigneeCity: new FormControl(''),
    cl_ConsigneeCountry: new FormControl(''),
    cl_ConsigneeMail: new FormControl(''),
    cl_ConsigneeMob1: new FormControl(''),
    cl_ConsigneeTel1: new FormControl(''),
    cl_ConsigneeZipCode: new FormControl(''),
    cl_CrDt: new FormControl('2026-07-27'),
    cl_CrUser: new FormControl(''),
    cl_DeliveryType: new FormControl('2'),
    cl_PDT: new FormControl(''),
    cl_PIns: new FormControl(''),
    cl_PT: new FormControl('')
  })
});
  //#endregion


}
