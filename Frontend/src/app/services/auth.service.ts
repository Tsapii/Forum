// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>('http://localhost:3000/api/auth/login', { username, password }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const currentUserString = localStorage.getItem('currentUser');
      if (currentUserString) {
        this.currentUser = JSON.parse(currentUserString);
      }
    }
    return this.currentUser;
  }
}
