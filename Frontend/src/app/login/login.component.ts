import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(success => {
        if (success) {
          console.log('Login successful');
        } else {
          console.log('Login failed');
        }
      });
  }
}