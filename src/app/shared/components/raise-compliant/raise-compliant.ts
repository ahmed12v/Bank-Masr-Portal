import { Component, effect } from '@angular/core';
import { StateService } from '../../../core/State/awbState';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-raise-compliant',
  imports: [ReactiveFormsModule],
  templateUrl: './raise-compliant.html',
  styleUrl: './raise-compliant.css',
})
export class RaiseCompliant {
  constructor(private _awbState: StateService) {

  effect(() => {
    console.log(
      'RAISE EFFECT VALUE:',
      this._awbState.awbNum()
    );
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
}
