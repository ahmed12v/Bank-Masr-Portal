import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { StateService } from '../../../core/State/awbState';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../../core/services/auth/storgeENC';
import { RaiseService } from '../../../core/services/compliant/raiseCompliant';
import { CustomerDetails, GetAccountDetialsResponse, ResponseCome } from '../../../core/interfaces/raiseComplain/raiseInterfaces';

@Component({
  selector: 'app-raise-compliant',
  imports: [ReactiveFormsModule],
  templateUrl: './raise-compliant.html',
  styleUrl: './raise-compliant.css',
})
export class RaiseCompliant implements OnInit{
  ngOnInit(): void {
    this.getNumber()
    this.getMyDetials()
    this.getSelectorMaster()
  }
  constructor(private _awbState: StateService) {

  effect(() => {
    // console.log(
    //   'RAISE EFFECT VALUE:',
    //   this._awbState.awbNum()
    // );
    this.complaintForm.patchValue({
      ComplaintData:{
        cl_AWBNO:this._awbState.awbNum()
      }
    })
  });

}
  isOpen = false;

openModal() {
  this.isOpen = true;
  document.body.style.overflow = 'hidden'; 
}

closeModal() {
  this.isOpen = false;
  document.body.style.overflow = 'auto'; 
}
restform(){
  //this.form.clear
}

//#region Declartions
_storgeData=inject(StorageService)
_raiseService=inject(RaiseService)
complainRgister=signal<string|null>('')
accountDetails = signal<CustomerDetails | null>(null);
selectors=signal<ResponseCome[] | null>(null)
today = new Date().toISOString().split('T')[0];

//#endregion

//#region RaiseForm
complaintForm = new FormGroup({

  UserID: new FormControl(''),
  UserPwd: new FormControl(''),

      ComplaintData: new FormGroup({

        cl_COREG: new FormControl(''),
        cl_CoDate: new FormControl(''),
        cl_AWBNO: new FormControl(''),
        cl_Act: new FormControl(''),
        cl_AssignTo: new FormControl(''),
        cl_ClientCode: new FormControl(''),
        cl_CustName: new FormControl(''),
        cl_EnqRefNo: new FormControl(''),
        cl_Lev: new FormControl(''),
        cl_Remarks: new FormControl(''),
        cl_Root: new FormControl(''),
        cl_Status: new FormControl(''),
        cl_cPerson: new FormControl(''),
        cl_complaint: new FormControl(''),
        cl_email: new FormControl(''),
        cl_empcode: new FormControl(''),
        cl_empcode1: new FormControl(''),
        cl_sri: new FormControl(''),
        cl_tel: new FormControl(''),
        cl_Car: new FormControl(''),
        cl_CarNo: new FormControl('')

      })

});
//#endregion

//#region getRegistNumber
registForm:FormGroup=new FormGroup({
  AccountNo:new FormControl(''),
  CustomerCode:new FormControl(''),
  UserID:new FormControl(''),
  UserPwd:new FormControl(''),
})

getNumber(){
const userCradentiona = this._storgeData.getItem('userCredentials');
this.registForm.patchValue({
  AccountNo:userCradentiona.CoCode,
  CustomerCode:userCradentiona.CoCode,
  UserPwd:userCradentiona.UserPWD,
  UserID:userCradentiona.UserID
})

if(this.registForm.valid){
  this._raiseService.getComplianNumber(this.registForm.value).subscribe({
    next:res=>{
      //console.log(res);
      if(res.BookingNo){
        this.complainRgister.set(res.BookingNo)
      
      }
    },
    error:err=>{
      //console.log(err);
    }
  })
}

}
//#endregion

//#region getAcountDetails
acountDetialsForm:FormGroup=new FormGroup({
  AccountNo:new FormControl(''),
  UserID:new FormControl(''),
  UserPwd:new FormControl(''),
})

getMyDetials(){
  const userCradentional = this._storgeData.getItem('userCredentials')
  this.acountDetialsForm.patchValue({
      AccountNo:userCradentional.CoCode,
      UserID:userCradentional.UserID,
      UserPwd:userCradentional.UserPWD,
  })
  this._raiseService.getAccountDetails(this.acountDetialsForm.value).subscribe({
    next:res=>{
       // console.log(res);
         this.accountDetails.set(res.CustomerDetails);
        
    },
    error:err=>{
       // console.log(err);
    }
  })
}
//#endregion

//#region resetCustData
resetAll(){
  this.getNumber()
  this.getMyDetials()
  this.complaintForm.reset()
}
//#endregion

//#region masterList
masterFOrm:FormGroup = new FormGroup({
  MasterType:new FormControl("CMPL"),
  UserId:new FormControl(""),
  UserPwd:new FormControl(""),
})

getSelectorMaster(){
const userCardentioanl = this._storgeData.getItem('userCredentials')
this.masterFOrm.patchValue({
  MasterType:"CMPL",
  UserId:userCardentioanl.UserID,
  UserPwd:userCardentioanl.UserPwd,
})

if(this.masterFOrm.valid){
  this._raiseService.getMasterTypeSelector(this.masterFOrm.value).subscribe({
    next:res=>{
      //console.log(res);
      this.selectors.set(res.Response)
    },
    error:err=>{
     // console.log(err);
    }
  })
}
}
//#endregion

}
