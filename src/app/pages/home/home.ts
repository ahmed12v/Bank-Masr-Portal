import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Main } from '../../shared/components/main/main';
import { StateService } from '../../core/State/awbState';
import { podStateService } from '../../core/State/Pod';
import { ShipmentStateService } from '../../core/State/consigneState';
import { AWBsearch } from '../../shared/components/awbsearch/awbsearch';

@Component({
  selector: 'app-home',
  imports: [Main ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 router = inject(Router);
 awbstate=inject(StateService)
 podSta=inject(podStateService)
 consigneeState = inject(ShipmentStateService)

  showLogout = false;


logout(){
  this.router.navigate(['/login']);
  localStorage.clear();
  this.awbstate.clear()
  this.podSta.clear()
  this.consigneeState.clear()
  
}

}
