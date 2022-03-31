import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Credentials } from '../interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  login(user: Credentials) {
    this.isAuthenticated.next(true)
  }

  logout() {
    this.isAuthenticated.next(false);
  }
}
