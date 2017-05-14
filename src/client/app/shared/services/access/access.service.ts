import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../../models/user';

/**
 * This class provides the Category service with methods to read names and add names.
 */
@Injectable()
export class AccessService {

  user: User = { id: 2, email: 'user@gmail.com', password: 'SDZE754848XAF', firstname: 'Oussama', lastname: 'El Abed' };

  /**
   * Creates a new CategoryService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {User} The Observable for the HTTP request.
   */
  getCurrentUser(): User {
    return this.user;
  }

}
