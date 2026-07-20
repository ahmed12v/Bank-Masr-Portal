import { Component } from '@angular/core';

@Component({
  selector: 'app-raise-compliant',
  imports: [],
  templateUrl: './raise-compliant.html',
  styleUrl: './raise-compliant.css',
})
export class RaiseCompliant {
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
}
