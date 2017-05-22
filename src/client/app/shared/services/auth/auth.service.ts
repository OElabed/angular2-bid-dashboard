import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../../models/user';

/**
 * The AuthService makes use of the UserService to log a user in to the application.
 * It is used by the AuthGuard service to protect routes that rely on a current user.
 *
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {

  public isLoggedIn: boolean = false;
  public redirectUrl: string;         // store the URL so we can redirect after logging in

  private readonly autoLoginKey: string = 'AuthService.AutoLogin';    // localStorage key to store details against for autologin.
  // private user: User;          // The authenticated user. Cached here for future proofing.
  private user: User = { id: 2, email: 'user@gmail.com', password: 'SDZE754848XAF', firstname: 'Oussama', lastname: 'El Abed' };

  /**
   * Creates an instance of AuthService.
   *
   * @param {UserService} userService
   * @param {Router} router
   *
   * @memberOf AuthService
   */
  constructor(private router: Router) { }

  /**
   * Retrieve the user from the UserService. If no user is found, create one with
   * the given username.
   *
   * @param {string} username
   * @returns {Observable<boolean>}
   *
   * @memberOf AuthService
   */
  login(username: string, rememberUser: boolean = false): Observable<boolean> {
    // Convert the userService return values to an Observable
    // return Observable.fromPromise(
    //   this.userService.getUser(username)
    //     .catch(error => {
    //       return this.userService.createUser(username)
    //     })
    //     .then(user => {
    //       this.user = user;
    //       if (rememberUser === true) {
    //         localStorage.setItem(this.autoLoginKey, username);
    //       }
    //       return true
    //     })
    // ).do(val => this.isLoggedIn = true);

    return Observable.of(false);
  }

  /** Log in with the previously used credentials if any are saved */
  autoLogin(): Observable<boolean> {
    let lastUser = localStorage.getItem(this.autoLoginKey);
    if (lastUser) {
      return this.login(lastUser);
    } else {
      return Observable.of(false);
    }
  }

  /**
   * Log out of the application.
   * @memberOf AuthService
   */
  logout(): void {
    this.isLoggedIn = false;
    this.user = undefined;
    this.redirectUrl = undefined;
    localStorage.removeItem(this.autoLoginKey);
    this.router.navigateByUrl('/login');
  }

  /**
   * Get the current user.
   * @returns {User|null}
   * @memberOf AuthService
   */
  getCurrentUser(): User | null {
    return this.user;
  }

}
