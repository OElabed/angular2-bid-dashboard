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
    selector: 'live-auctions-cmp',
    templateUrl: 'live-auctions.component.html'
})
export class LiveAuctionsComponent implements OnInit {

    bids: Bid[] = [];
    breadcrumbs: Breadcrumb[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(private bidService: BidService, private breadcrumbService: BreadcrumbService) { }

    ngOnInit() {
        this.bidService
            .getAll()
            .subscribe(
         /* happy path */ p => this.bids = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

        this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('liveAuctions');
    }

}

