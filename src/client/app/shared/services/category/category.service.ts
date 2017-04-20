import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Category } from '../../models/category';

/**
 * This class provides the Category service with methods to read names and add names.
 */
@Injectable()
export class CategoryService {

  /**
   * Creates a new CategoryService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {Category[]} The Observable for the HTTP request.
   */
  get(): Observable<Category[]> {
    return this.http.get('/assets/data/category-data.json')
                    .map(mapCategories)
                    .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

function mapCategories(response:Response): Category[] {
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().map(toCategory);
}

function toCategory(res:any): Category {
  let category = <Category>({
    id: res.id,
    name: res.name
  });
  console.debug('Parsed category:', category);
  return category;
}

