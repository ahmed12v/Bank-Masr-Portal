import { ChangeDetectorRef, Component, EventEmitter, inject, Output, signal } from "@angular/core";
import { Complaint } from "../../../core/interfaces/compliant/qaury";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { QuaryService } from "../../../core/services/compliant/quarycomplian";
import { StorageService } from "../../../core/services/auth/storgeENC";
import { SlicePipe } from "@angular/common";

@Component({
  selector: "app-quary-comp",
  imports: [ReactiveFormsModule, SlicePipe],
  templateUrl: "./quary-comp.html",
  styleUrl: "./quary-comp.css",
})
export class QuaryComp {
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
          if (res.Code === "-1") {
            this.complaints = [];
            this.isEmpty.set(true);
            this.popupOpen.set(true);
            return;
          }

          this.complaints = JSON.parse(res.JasonString);
          const newData: Complaint[] = JSON.parse(res.JasonString);

          if (newData.length > 0) {
            this.complaints = newData;
            this.isEmpty.set(false);
          }

          this.isEmpty.set(false);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.log(err);
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
@Output() createComplaint = new EventEmitter<void>();

opennComplaint() {
  this.createComplaint.emit();
}

}
