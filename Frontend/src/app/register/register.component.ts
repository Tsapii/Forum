import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService) {}

  register(): void {
    console.log('Registering user:', this.username);
  }
}