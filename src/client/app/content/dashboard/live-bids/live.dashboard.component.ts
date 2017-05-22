import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BidService } from '../../../shared/services/bid/bid.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { BreadcrumbService } from '../../../shared/services/breadcrumb/breadcrumb.service';

import { OnPaging, PageData } from '../../../shared/modules/layout/list/paging';

import { Bid } from '../../../shared/models/bid';
import { User } from '../../../shared/models/user';
import { Breadcrumb } from '../../../shared/models/breadcrumb';

const PAGES_COLLECTIONS_SIZE: number = 2;

@Component({
    moduleId: module.id,
    selector: 'live-dashboard-cmp',
    templateUrl: 'live.dashboard.component.html'
})
export class LiveDashboardComponent implements OnInit, OnPaging {

    liveBids: Bid[];
    liveBidsIds: number[];
    errorMessage: string = '';
    isLoading: boolean = true;

    pageData: PageData = { current: 1, pages_size: 5, page_collections_size: PAGES_COLLECTIONS_SIZE };

    userId: number;

    constructor(private authService: AuthService, private bidService: BidService) { }

    ngOnInit() {

        var user = this.authService.getCurrentUser();
        this.userId = user.id;
        this.loadBids();
    }

    onPageChange(event: any) {
        this.pageData.current = event;
        console.debug(this.pageData.current);
        this.loadBids();
    }


    loadBids() {
        this.bidService
            .getLiveByUser(this.userId)
            .subscribe(
            bidsIds => {
                this.bidService
                    .getLiveByListIds(bidsIds, this.pageData.current, 4)
                    .subscribe(
                    bids => this.liveBids = bids,
                    e => this.errorMessage = e,
                    () => this.isLoading = false);
            },
            e => this.errorMessage = e,
            () => this.isLoading = false);
    }
}
