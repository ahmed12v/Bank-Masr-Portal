import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Main } from '../../shared/components/main/main';

@Component({
  selector: 'app-home',
  imports: [Main],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 router = inject(Router);
  showLogout = false;


logout(){
  this.router.navigate(['/login']);
  localStorage.clear();
}

}
