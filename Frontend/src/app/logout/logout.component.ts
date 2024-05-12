import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
