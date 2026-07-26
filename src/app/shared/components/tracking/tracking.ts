import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Trackingser } from "../../../core/services/tracking/tracking";
import { ChangeDetectorRef, Component, inject, signal } from "@angular/core";
import { StorageService } from "../../../core/services/auth/storgeENC";
import {
  TrackInfoRes,
  TrackList,
} from "../../../core/interfaces/tracking/responseTrack";
import { CommonModule } from "@angular/common";
import { StateService } from "../../../core/State/awbState";
export interface ConsigneeDetails {
  name: string;
  address: string;
  phones: string[];
}
@Component({
  selector: "app-tracking",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./tracking.html",
  styleUrl: "./tracking.css",
})
export class Tracking {
  //#region Services
  private _trackingService = inject(Trackingser);
  private _storgeCradintioal = inject(StorageService);
  private _awbStaeService=inject(StateService)
  private cdr = inject(ChangeDetectorRef);
  trackInfooo: TrackInfoRes | null = null;
  tracklistArray: TrackList[] = [];
  isEmpty = false;
  spinnerTrack = signal(false);
  popupOpen = signal(false);
  //#endregion

  //#region consignee data hundel
  //
  consigneeDetails: ConsigneeDetails = {
    name: "",
    address: "",
    phones: [],
  };
  //
  private formatConsigneeDetails(details: string): ConsigneeDetails {
    if (!details) {
      return {
        name: "",
        address: "",
        phones: [],
      };
    }

    const parts = details.split(",");
    const phonePart = parts[parts.length - 1];
    const phones = phonePart.match(/01\d{9}/g) || [];
    const name = parts[0]?.trim() || "";
    const address = parts
      .slice(1, parts.length - 1)
      .join(", ")
      .trim();

    return {
      name,
      address,
      phones: [...new Set(phones)],
    };
  }
  //#endregion

  //#region form api
  trackFormSend: FormGroup = new FormGroup({
    AccountNo: new FormControl(""),
    TrackingNo: new FormControl(""),
    ActiveDataBase: new FormControl("integraontrack"),
    AccountPWD: new FormControl(""),
  });
  //#endregion

  //#region api call

  trackNow() {
    // Reset old data before new search
    this.isEmpty = false;
    this.trackInfooo = null;
    this.tracklistArray = [];
      const trackAwbNum = this.trackFormSend.value.TrackingNo?.trim();
                if (trackAwbNum) {
                  console.log('NEW AWB:', trackAwbNum);
                  this._awbStaeService.set(trackAwbNum);
                  console.log('STATE VALUE:', this._awbStaeService.awbNum());
                  
          
          }
   
    const userCrad = this._storgeCradintioal.getItem("userCredentials");

    this.trackFormSend.patchValue({
      AccountNo: userCrad.CoCode,
      AccountPWD: userCrad.UserPWD,
    });
   

    if (this.trackFormSend.valid) {
      this._trackingService.TrackingAWB(this.trackFormSend.value).subscribe({
        next: (res) => {
          //console.log('Tracking Response:', res);
          
          // No Data
          if (res.code === "-1" || !res.TrackInfo?.length) {
            this.isEmpty = true;
            this.trackInfooo = null;
            this.tracklistArray = [];
            this.cdr.detectChanges();
            this.popupOpen.set(true);
           
            return;
          }
          // Has Data
          this.isEmpty = false;
          this.trackInfooo = res;
          this.tracklistArray = [...res.TrackInfo[0].trackList];
          
              
           
          

          const consignee =
            res.TrackInfo[0].ShipmentInformation.ConsigneeDetails;
          this.consigneeDetails = this.formatConsigneeDetails(consignee);
          this.cdr.detectChanges();
        },

        error: (err) => {
          // console.log(err);
          this.isEmpty = true;
          this.trackInfooo = null;
          this.tracklistArray = [];
          this.cdr.detectChanges();
          this.spinnerTrack.set(false);
        },
      });
    }
  }
  //#endregion

}
