import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { BidService } from '../../shared/services/bid/bid.service';
import { Bid } from '../../shared/models/bid';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'feature-auctions-home-cmp',
    templateUrl: 'feature-auctions.html'
})
export class FeatureAuctionsHomeComponent implements OnInit {

    bids: Bid[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(private bidService: BidService) { }

    ngOnInit() {

        this.bidService
            .getFeature(1, 3)
            .subscribe(
         /* happy path */ p => this.bids = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
    }


}

@Component({
    moduleId: module.id,
    selector: 'live-auctions-home-cmp',
    templateUrl: 'live-auctions.html'
})
export class LiveAuctionsHomeComponent implements OnInit {

    bids: Bid[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(private bidService: BidService) { }

    ngOnInit() {

        this.bidService
            .get(1, 4)
            .subscribe(
         /* happy path */ p => this.bids = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
    }

}

@Component({
    moduleId: module.id,
    selector: 'home-cmp',
    templateUrl: 'home.component.html'
})

export class HomeComponent { }
