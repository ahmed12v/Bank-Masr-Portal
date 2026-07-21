import { Component } from '@angular/core';
import { AWBsearch } from '../awbsearch/awbsearch';
import { DeliveryMangement } from '../delivery-mangement/delivery-mangement';
import { DomasticAwbGreation } from '../domastic-awb-greation/domastic-awb-greation';
import { RaiseCompliant } from '../raise-compliant/raise-compliant';
import { Tracking } from '../tracking/tracking';
import { QuaryComp } from '../quary-comp/quary-comp';

@Component({
  selector: 'app-main',
  imports: [AWBsearch , DeliveryMangement , DomasticAwbGreation , RaiseCompliant , Tracking ,QuaryComp],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
   sections = [
    
    {
      id: 0,
      title: "Tracking",
      icon: "fa-solid fa-binoculars",
      open: true,
    },
    {
      id: 1,
      title: "Domestic AirwayBill Creation",
      icon: "fa-solid fa-truck",
      open: false,
    },
    {
      id: 2,
      title: "AWB Search Panel",
      icon: "fa-solid fa-truck",
      open: false,
    },
    {
      id: 3,
      title: "Customer Support",
      icon: "fa-solid fa-user",
      open: false,
    },
    {
      id: 4,
      title: "Delivery Management",
      icon: "fa-solid fa-credit-card",
      open: false,
    },
    {
      id: 5,
      title: "Compliant Status",
      icon: "fa-solid fa-envelope",
      open: false,
    }
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
