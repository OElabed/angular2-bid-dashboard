import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Bid } from '../../../models/bid';
import { ActionBid } from '../../../models/bid';
import { Counter } from '../../../models/timer';
import { Hourglass } from '../../../models/timer';

import { AuctionsService } from '../../../services/auctions/auctions.service';

@Component({
    moduleId: module.id,
    selector: 'bid-dashboard-live-cmp',
    templateUrl: 'bid-dashboard-live.component.html',
})

export class BidDashboardLiveComponent implements OnChanges {
    @Input()
    data: Bid;

    errorMessage: string = '';
    isLoading: boolean = true;

    timer: Hourglass;

    candidatewinner: ActionBid = {
        id: null,
        bid_id: null,
        price_add: 0,
        order: null,
        time_bid: 'not defined',
        user: {
            id: null,
            email: '',
            password: '',
            firstname: '',
            lastname: ''
        }
    };

    constructor(private auctionsService: AuctionsService) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {

            this.timer = new Hourglass(this.data.time_end);
            // TODO chage to this number
            //this.auctionsService.getActionsByBidId(bid.id).subscribe(
            this.auctionsService.getActionsByBidId(1).subscribe(
         /* happy path */ actions => this.refreshActionsBid(actions),
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false
            );
        }
    }

    refreshActionsBid(actions: ActionBid[]) {
        this.data.price_actu = actions.map((action: ActionBid) => action.price_add)
            .reduce((total: number, price_add: number) => total + price_add)
            + this.data.price_start;

        var actionsSorted = actions.sort((obj1: ActionBid, obj2: ActionBid) => obj1.order - obj2.order);

        this.candidatewinner = actionsSorted[actionsSorted.length - 1];
    }
}
