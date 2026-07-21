import { Component } from '@angular/core';
import { AWBsearch } from '../awbsearch/awbsearch';
import { DeliveryMangement } from '../delivery-mangement/delivery-mangement';
import { DomasticAwbGreation } from '../domastic-awb-greation/domastic-awb-greation';
import { RaiseCompliant } from '../raise-compliant/raise-compliant';
import { Tracking } from '../tracking/tracking';

@Component({
  selector: 'app-main',
  imports: [AWBsearch , DeliveryMangement , DomasticAwbGreation , RaiseCompliant , Tracking],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
   sections = [
    
    // {
    //   id: 0,
    //   title: "Tracking",
    //   icon: "fa-solid fa-binoculars",
    //   open: false,
    // },
    {
      id: 0,
      title: "Domestic AirwayBill Creation",
      icon: "fa-solid fa-truck",
      open: false,
    },
    {
      id: 1,
      title: "AWB Search Panel",
      icon: "fa-solid fa-truck",
      open: false,
    },
    {
      id: 2,
      title: "Customer Support",
      icon: "fa-solid fa-user",
      open: false,
    },
    {
      id: 3,
      title: "Delivery Management",
      icon: "fa-solid fa-credit-card",
      open: false,
    },
  ];

  toggleSection(id: number): void {
    this.sections.forEach((section) => {
      if (section.id === id) {
        section.open = !section.open;
      } else {
        section.open = false;
      }
    });
  }
}
