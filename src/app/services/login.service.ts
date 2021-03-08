import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user = new BehaviorSubject<User>({ user: '' });
  _user = this.user.asObservable();

  constructor() {}

  setUser(user) {
    this.user.next(user);
  }

  isLoggedIn() {
    const currentUser = this.user.getValue();
    return currentUser.user;
  }
}
