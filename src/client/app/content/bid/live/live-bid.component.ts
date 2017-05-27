import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BidService } from '../../../shared/services/bid/bid.service';
import { BreadcrumbService } from '../../../shared/services/breadcrumb/breadcrumb.service';

import { Category } from '../../../shared/models/category';
import { Bid } from '../../../shared/models/bid';
import { Hourglass } from '../../../shared/models/timer';
import { Counter } from '../../../shared/models/timer';
import { Product, ProductInfos } from '../../../shared/models/product';
import { Breadcrumb } from '../../../shared/models/breadcrumb';
import { BreadcrumbSubItem } from '../../../shared/models/breadcrumb';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'live-bid-cmp',
    templateUrl: 'live-bid.component.html'
})
export class LiveBidComponent implements OnInit {

    data: Bid;

    breadcrumbs: Breadcrumb[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    timer: Hourglass;

    private sub: any;

    constructor(
        private bidService: BidService,
        private breadcrumbService: BreadcrumbService,
        private route: ActivatedRoute
    ) {
        this.data = <Bid>({});
        this.data.time_end = <Counter>({});
        this.data.product = <Product>({});
        this.data.product.infos = <ProductInfos>({});
        this.data.product.infos.category = <Category>({});
    }

    ngOnInit() {

        var bidId: number;

        this.sub = this.route.params.subscribe(params => {
            bidId = +params['id'];

            this.bidService.getById(bidId).subscribe(
                bid => {
                    this.data = bid;

                    this.timer = new Hourglass(this.data.time_end);

                    this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('liveBid', <BreadcrumbSubItem>({
                        name: this.data.product.name,
                        sublink: this.data.id.toString()
                    }));
                },
                e => this.errorMessage = e,
                () => this.isLoading = false
            );
        });

    }
}

