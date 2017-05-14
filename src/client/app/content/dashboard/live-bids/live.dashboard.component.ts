import { Component, OnInit } from '@angular/core';

import { BidService } from '../../../shared/services/bid/bid.service';
import { AccessService } from '../../../shared/services/access/access.service';

import { Bid } from '../../../shared/models/bid';
import { User } from '../../../shared/models/user';

@Component({
    moduleId: module.id,
    selector: 'live-dashboard-cmp',
    templateUrl: 'live.dashboard.component.html'
})

export class LiveDashboardComponent implements OnInit {

    liveBids: Bid[];
    liveBidsIds: number[];
    errorMessage: string = '';
    isLoading: boolean = true;


    constructor(private accessService: AccessService, private bidService: BidService) { }

    ngOnInit() {

        var user = this.accessService.getCurrentUser();

        this.bidService
            .getLiveByUser(user.id)
            .subscribe(
            bidsIds => {
                this.bidService
                    .getLiveByListIds(bidsIds, 1, 4)
                    .subscribe(
                    bids => this.liveBids = bids,
                    e => this.errorMessage = e,
                    () => this.isLoading = false);
            },
            e => this.errorMessage = e,
            () => this.isLoading = false);
    }
}
