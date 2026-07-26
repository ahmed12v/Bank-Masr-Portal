import { ChangeDetectorRef, Component, effect, EventEmitter, inject, Output, signal } from "@angular/core";
import { Complaint } from "../../../core/interfaces/compliant/qaury";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { QuaryService } from "../../../core/services/compliant/quarycomplian";
import { StorageService } from "../../../core/services/auth/storgeENC";
import { SlicePipe } from "@angular/common";
import { StateService } from "../../../core/State/awbState";

@Component({
  selector: "app-quary-comp",
  imports: [ReactiveFormsModule, SlicePipe],
  templateUrl: "./quary-comp.html",
  styleUrl: "./quary-comp.css",
})
export class QuaryComp {
  constructor(private _awbsate:StateService){
     console.log('QUERY CONSTRUCTOR:', this._awbsate.awbNum());
    effect(()=>{
      const awb = this._awbsate.awbNum()
         console.log('EFFECT AWB:', awb);
      if(!awb)return
      this.CompliantSearchForm.patchValue({
        AWBno:awb
      })
    //   console.log(
    //   'FORM AWB:',
    //   this.CompliantSearchForm.get('AWBno')?.value
    // );
      this.SearchNow()
    })

  }
  complaints: Complaint[] = [];

  private _compliantService = inject(QuaryService);
  private _storgeSer = inject(StorageService);
  private cdr = inject(ChangeDetectorRef);

  isEmpty = signal(false);
  popupOpen = signal(false);
  today = new Date().toISOString().split("T")[0];

  CompliantSearchForm: FormGroup = new FormGroup({
    DataBase: new FormControl("integraontrack"),
    DateFrom: new FormControl(this.today),
    DateTo: new FormControl(this.today),
    SqlString: new FormControl(""),
    UserID: new FormControl(""),
    UserPwd: new FormControl(""),
    AWBno: new FormControl(""),
    InternalStatusCode: new FormControl(""),
    LifecycleStatus: new FormControl(""),
    RegSequenceFrom: new FormControl(""),
    RegSequenceTo: new FormControl(""),
  });
 //#region  call api

  SearchNow() {
   // this.complaints = [];
    const userCrad = this._storgeSer.getItem("userCredentials");
    console.log(userCrad);
      const today = new Date();

  const dateTo = today.toISOString().split("T")[0];


  const dateFromDate = new Date();
  dateFromDate.setFullYear(today.getFullYear() - 1);

  const dateFrom = dateFromDate.toISOString().split("T")[0];


  this.CompliantSearchForm.patchValue({
    DateFrom: dateFrom,
    DateTo: dateTo
  });

    const form = this.CompliantSearchForm.getRawValue();

    let sql = `
select
    CoReg,
    convert(varchar, Codate, 103) as ComplaintDate,
    Complaint,
    AWBNO as AirwayBillNo,
    Remarks,
    rootname as RootCause,
    StatusDescription as Status
from ComplaintRegView
where 1=1
`;

    if (form.DateFrom) {
      sql += ` and Codate >= '${form.DateFrom}'`;
    }

    if (form.DateTo) {
      sql += ` and Codate <= '${form.DateTo}'`;
    }

    if (form.RegSequenceFrom) {
      sql += ` and CoReg >= '${form.RegSequenceFrom}'`;
    }

    if (form.RegSequenceTo) {
      sql += ` and CoReg <= '${form.RegSequenceTo}'`;
    }

    sql += ` and ClientCode='${userCrad.CoCode}'`;

    if (form.AWBno) {
      sql += ` and (AWBNo like '%${form.AWBno}%' or EnqRefNo like '%${form.AWBno}%')`;
    }

    if (form.InternalStatusCode) {
      sql += ` and Status='${form.InternalStatusCode}'`;
    }

    if (form.LifecycleStatus === "Open") {
      sql += ` and Status <> 'CC'`;
    } else if (form.LifecycleStatus === "Close") {
      sql += ` and Status = 'CC'`;
    }
    this.CompliantSearchForm.patchValue({
      UserID: userCrad.UserID,
      UserPwd: userCrad.UserPWD,
      DataBase: "integraontrack",
      SqlString: sql,
    });

    console.log(sql);
    this._compliantService
      .getQuery(this.CompliantSearchForm.getRawValue())
      .subscribe({
        next: (res) => {
           this.complaints = [];
           this.isEmpty.set(false);

  if (
    res.Code === "-1" ||
    !res.JasonString ||
    res.JasonString === "[]" ||
    JSON.parse(res.JasonString).length === 0
  ) {

    this.complaints = [];
    this.isEmpty.set(true);
    this.popupOpen.set(true);
    this.cdr.detectChanges();

    return;
  }


  const newData: Complaint[] = JSON.parse(res.JasonString);


  this.complaints = newData;

  this.isEmpty.set(false);

  this.cdr.detectChanges();
           //this._awbsate.clear()
        },
        error: (err) => {
          console.log(err);
           //this._awbsate.clear()
        },
       
      });
  }
//#endregion

//#region formClear
  resetForm() {
    this.CompliantSearchForm.reset({
      DataBase: "integraontrack",
      DateFrom: this.today,
      DateTo: this.today,
      SqlString: "",
      UserID: "",
      AWBno: "",
      InternalStatusCode: "",
      LifecycleStatus: "",
      RegSequenceFrom: "",
      RegSequenceTo: "",
      AccountNo: "",
      AccountPWD: "",
    });

    this.complaints = [];
    this.isEmpty.set(false);
  }
  //#endregion

  //#region detials Popup
  selectedComplaint!: Complaint;

  showComplaintPopup = signal(false);

  openComplaint(item: Complaint) {
    this.selectedComplaint = item;
    this.showComplaintPopup.set(true);
  }

  closeComplaintPopup() {
    this.showComplaintPopup.set(false);
  }
  //#endregion

//#region goToRaise
@Output() createComplaint = new EventEmitter<string>();

opennComplaint() {
  
   const awb = this._awbsate.awbNum();
  //console.log('AWB:', awb);
  this.createComplaint.emit(awb || '');
  
}

}
