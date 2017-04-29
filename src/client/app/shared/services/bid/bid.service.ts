import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Bid } from '../../models/bid';
import { Product } from '../../models/product';

/**
 * This class provides the Bid service with methods to read names and add names.
 */
@Injectable()
export class BidService {

  /**
   * Creates a new Bid Service with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {Bid[]} The Observable for the HTTP request.
   */
  getAll(): Observable<Bid[]> {
    return this.http.get('/assets/data/bid-live-data.json')
      .map(mapBids)
      .catch(this.handleError);
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {Bid[]} The Observable for the HTTP request.
   */
  get(page: number, maxSize: number): Observable<Bid[]> {
    let offset = 0;
    if (page > 1) {
      offset = (page - 1) * maxSize;
    }

    return this.http.get('/assets/data/bid-live-data.json')
      .map((response: Response) => {
        let bids = response.json();

        return <Bid>bids.slice(offset, offset + maxSize);
      })
      .catch(this.handleError);
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {Bid[]} The Observable for the HTTP request.
   */
  getByCategory(categoryId: number): Observable<Bid[]> {
    return this.http.get('/assets/data/bid-live-data.json')
      .map((response: Response) => {
        let bids = response.json();
        let filtered = bids.filter((bid: Bid) => bid.product.category === categoryId);

        return <Bid>filtered;
      })
      .catch(this.handleError);
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {Bid[]} The Observable for the HTTP request.
   */
  getByCategoryPage(categoryId: number, page: number, maxSize: number): Observable<Bid[]> {
    let offset = 0;
    if (page > 1) {
      offset = (page - 1) * maxSize;
    }

    return this.http.get('/assets/data/bid-live-data.json')
      .map((response: Response) => {
        let bids = response.json();
        let filtered = bids.filter((bid: Bid) => bid.product.category === categoryId);

        return <Bid>filtered.slice(offset, offset + maxSize);
      })
      .catch(this.handleError);
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {Bid} The Observable for the HTTP request.
   */
  getById(id: number): Observable<Bid> {
    return this.http.get('/assets/data/bid-live-data.json')
      .map((response: Response) => {
        let bids = response.json();
        let filtered = bids.filter((bid: Bid) => bid.id === id);

        return <Bid>filtered[0];
      })
      .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

function mapBids(response: Response): Bid[] {
  // uncomment to simulate error:
  // throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().map(toBid);
}

function toBid(res: any): Bid {
  let bid = <Bid>({
    id: res.id,
    product: toProduct(res.product),
    price_actu: res.price,
    time_end: res.category,
    contrib: res.description,
  });
  console.debug('Parsed bid:', bid);
  return bid;
}

function toProduct(res: any): Product {
  let product = <Product>({
    id: res.id,
    name: res.name,
    img: res.img,
    price: res.price,
    category: res.category,
    description: res.description,
    reference: res.reference,
    new: res.new,
  });
  return product;
}

// function mapProduct(response:Response): Product{
//   // toProduct looks just like in the previous example
//   return toProduct(response.json());
// }
