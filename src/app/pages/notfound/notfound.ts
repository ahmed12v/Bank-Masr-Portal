import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [],
  templateUrl: './notfound.html',
  styleUrl: './notfound.css',
})
export class Notfound {
  trackingCode = '404-000-0000';

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
