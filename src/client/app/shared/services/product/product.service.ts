import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../../models/product';

/**
 * This class provides the Product service with methods to read names and add names.
 */
@Injectable()
export class ProductService {

  /**
   * Creates a new ProductService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {Product[]} The Observable for the HTTP request.
   */
  get(): Observable<Product[]> {
    return this.http.get('/assets/data/product-data.json')
                    .map(mapProducts)
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

function mapProducts(response:Response): Product[] {
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().map(toProduct);
}

function toProduct(res:any): Product {
  let product = <Product>({
    id: res.id,
    name: res.name,
    price: res.price,
    description: res.description,
  });
  console.debug('Parsed product:', product);
  return product;
}

// function mapProduct(response:Response): Product{
//   // toProduct looks just like in the previous example
//   return toProduct(response.json());
// }

