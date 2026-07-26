import { ChangeDetectorRef, Component, effect, inject, signal } from '@angular/core';
import { searchPanelService } from '../../../core/services/awbSearch/searchPanel';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from '../../../core/services/auth/storgeENC';
import { StateService } from '../../../core/State/awbState';
import { ShipmentDetails } from '../../../core/interfaces/AWBSearch/awbSearchinterface';

@Component({
  selector: 'app-awbsearch',
  imports: [],
  templateUrl: './awbsearch.html',
  styleUrl: './awbsearch.css',
})
export class AWBsearch {

  constructor(private _awbsate:StateService){
    effect(()=>{
      const awb = this._awbsate.awbNum()
      if(!awb)return
      this.panelForm.patchValue({
        AWBRangeFrom:awb,
        AWBRangeTo:awb,
      })
      console.log(
      'FORM AWB:',
      this.panelForm.get('AWBno')?.value
    );
      this.panelNow()
      // this._awbsate.set('');
    })

  }

  //#region dclaration 
  searchPanelService=inject(searchPanelService)
  _storgeSer=inject(StorageService)
  awbSearch : ShipmentDetails[] =[]
  isEmpty=signal(false)
  private cdr = inject(ChangeDetectorRef);
  //#endregion

  //#region panel Form 
   panelForm :FormGroup = new FormGroup({
    AccessCode: new FormControl(''),
    ActiveDataBase: new FormControl(''),
    FilterCondition: new FormControl(''),
    FilterFinal: new FormControl(''),
    FilterMid: new FormControl(''),
    Status: new FormControl(''),
    DateFrom: new FormControl(''),
    DateTo: new FormControl(''),
    ShipperAccountName: new FormControl(''),
    ConsigneeName: new FormControl(''),
    AWBRangeFrom: new FormControl(''),
    AWBRangeTo: new FormControl(''),
    ShipmentReference: new FormControl(''),
    BookingReferenceNumber: new FormControl(''),
    ShipperPhoneNo: new FormControl(''),
    ConsigneeTelNo: new FormControl(''),
    Origin: new FormControl(''),
    Dest: new FormControl(''),
    GoodsDescription: new FormControl(''),
    SpecialInstruction: new FormControl(''),
    Product: new FormControl(''),
    Service: new FormControl(''),
    WtFrom: new FormControl(''),
    WtTo: new FormControl(''),
    ShipmentStatus: new FormControl(''),
   
   })
  //#endregion

  //#region call apiSearch
  panelNow(){
    const userCrad = this._storgeSer.getItem("userCredentials");
    const today = new Date();
    const dateTo = today.toISOString().split("T")[0];
    const dateFromDate = new Date();
    dateFromDate.setFullYear(today.getFullYear() - 1);
    const dateFrom = dateFromDate.toISOString().split("T")[0];

    this.panelForm.patchValue({
      DateFrom: dateFrom,
    DateTo: dateTo,
    })
    const form = this.panelForm.getRawValue();
    let filterCondition = ` and 1=1 `;

        if(form.DateFrom){
          filterCondition += ` and m.PickUpDate >= '${form.DateFrom}'`;
        }
        else{
          filterCondition += ` and m.PickUpDate >= '${dateFrom}'`;
        }

        if(form.DateTo){
          filterCondition += ` and m.PickUpDate <= '${form.DateTo}'`;
        }
        else{
          filterCondition += ` and m.PickUpDate <= '${dateTo}'`;
        }

        if(form.AWBRangeFrom){
          filterCondition += ` and m.AWBNo >= '${form.AWBRangeFrom}'`;
        }

        if(form.AWBRangeTo){
          filterCondition += ` and m.AWBNo <= '${form.AWBRangeTo}'`;
        }

        if(form.ShipmentReference){
          filterCondition += ` and isnull(m.ShipperRef,'') like '%${form.ShipmentReference}%'`;
        }

        if(form.BookingReferenceNumber){
          filterCondition += ` and isnull(m.BookingRefNo,'') = '${form.BookingReferenceNumber}'`;
        }

        if(form.Origin){
          filterCondition += ` and isnull(m.Origin,'') = '${form.Origin}'`;
        }

        if(form.Dest){
          filterCondition += ` and m.Destination = '${form.Dest}'`;
        }

        if(form.Product){
          filterCondition += ` and isnull(m.ProductType,'') = '${form.Product}'`;
        }

        if(form.Service){
          filterCondition += ` and isnull(m.ServiceType,'') = '${form.Service}'`;
        }

        if(form.ShipperAccountName){
          filterCondition += `
          and (
            isnull(d.Shipper,'') like '%${form.ShipperAccountName}%'
            or isnull(d.ShipperName,'') like '%${form.ShipperAccountName}%'
          )
          `;
        }


        if(form.ConsigneeName){
          filterCondition += `
          and (
            isnull(d.Consignee,'') like '%${form.ConsigneeName}%'
            or isnull(d.ConsigneeName,'') like '%${form.ConsigneeName}%'
          )
          `;
        }


        if(form.ShipmentStatus){
          filterCondition += ` and m.Status='${form.ShipmentStatus}'`;
        }



        const request = {
          AccessCode: userCrad.UserID,
          ActiveDataBase: "integraontrack",
          FilterCondition: filterCondition,
          FilterFinal: " and 1=1",
          FilterMid: " and 1=1",
          Status: ""
        };

  //console.log(request);
    
    if(this.panelForm.valid){
      this.searchPanelService.searchNowPanel(request).subscribe({
        next:res=>{
               this.awbSearch=[]
               console.log( 'panel', res);
               if (
                res.code === "-1" ||
                !res.JasonString ||
                res.JasonString === "[]" ||
                JSON.parse(res.JasonString).length === 0
              ) {

                this.awbSearch = [];
                this.isEmpty.set(true);
                this.cdr.markForCheck();

                return;
              }
              const newData: ShipmentDetails[] = JSON.parse(res.JasonString);
              
              
                this.awbSearch = newData;
                this.isEmpty.set(false);
                this.cdr.markForCheck();
               
        },
        error:err=>{
                 console.log('panel' ,err);
                 

        }
      })
    }
    

  }
  //#endregion


}
