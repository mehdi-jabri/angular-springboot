import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers: HttpHeaders;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: User;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  login(email: string, password: string) {
  /*  return this.http.post('/api/login', {email: email, password: password})
      .pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }));*/
    console.log('Login');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
