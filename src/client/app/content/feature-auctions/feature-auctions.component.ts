import { Component, OnInit } from '@angular/core';

import { BidService } from '../../shared/services/bid/bid.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

import { Bid } from '../../shared/models/bid';
import { Breadcrumb } from '../../shared/models/breadcrumb';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'feature-auctions-cmp',
    templateUrl: 'feature-auctions.component.html'
})
export class FeatureAuctionsComponent implements OnInit {

    bids: Bid[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    breadcrumbs: Breadcrumb[] = [];

    constructor(private breadcrumbService: BreadcrumbService, private bidService: BidService) { }

    ngOnInit() {

        this.bidService
            .getFeature(1, 6)
            .subscribe(
         /* happy path */ p => this.bids = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

        this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('featureAuctions');
    }
}

