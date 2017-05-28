import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Bid } from '../../models/bid';
import { User } from '../../models/user';
import { AuctionBid } from '../../models/bid';

import { AuctionsMappers } from '../../mappers/auctionMappers';

import { MomentUtils } from '../../utils/moment.utils';

/**
 * This class provides the Bid service with methods to read names and add names.
 */
@Injectable()
export class AuctionsService {

  /**
   * Creates a new Bid Service with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {Bid} The Observable for the HTTP request.
   */
  getAuctionsByBidId(id: number): Observable<AuctionBid[]> {
    return this.http.get('/assets/data/auctions-bid-actions.json')
      .map((response: Response) => {
        let actions = mapAuctionsBids(response);
        let filtered = actions.filter((action: AuctionBid) => action.bid_id === id);
        return filtered;
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

function mapAuctionsBids(response: Response): AuctionBid[] {
  // uncomment to simulate error:
  // throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().map(AuctionsMappers.toAuctionBid);
}

