import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BidService } from '../../../shared/services/bid/bid.service';
import { BreadcrumbService } from '../../../shared/services/breadcrumb/breadcrumb.service';
import { AuctionsService } from '../../../shared/services/auctions/auctions.service';

import { Category } from '../../../shared/models/category';
import { Bid } from '../../../shared/models/bid';
import { AuctionBid } from '../../../shared/models/bid';
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

    allAuctionsSorted: AuctionBid[] = [];
    auctions: AuctionBid[] = [];

    showMore: number = 1;

    candidatewinner: AuctionBid = {
        id: null,
        bid_id: null,
        price_add: 0,
        order: null,
        time_bid: 'not defined',
        price_actu: 0,
        user: {
            id: null,
            email: '',
            password: '',
            firstname: '',
            lastname: ''
        }
    };


    timer: Hourglass;

    private sub: any;

    constructor(
        private bidService: BidService,
        private breadcrumbService: BreadcrumbService,
        private auctionsService: AuctionsService,
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

                    this.auctionsService.getAuctionsByBidId(1).subscribe(
                        auctions => {
                            this.computeActualPrice(auctions);
                            this.refreshAuctionsBid(auctions);
                            this.displayCandidateWinner();
                            this.displayAuctionsList();

                        },
                        e => this.errorMessage = e,
                        () => this.isLoading = false
                    );
                },
                e => this.errorMessage = e,
                () => this.isLoading = false
            );
        });

    }

    refreshAuctionsBid(auctions: AuctionBid[]) {
        var auctionsList: AuctionBid[] = auctions.sort((obj1: AuctionBid, obj2: AuctionBid) => obj2.order - obj1.order);

        var accumulatePrice: number = 0;
        auctionsList.forEach((element, i) => {
            accumulatePrice += element.price_add;
            element.price_actu = this.data.price_start + accumulatePrice;
        });

        this.allAuctionsSorted = auctionsList.slice().reverse();
    }

    computeActualPrice(auctions: AuctionBid[]) {
        this.data.price_actu = auctions.map((action: AuctionBid) => action.price_add)
            .reduce((total: number, price_add: number) => total + price_add)
            + this.data.price_start;
    }

    displayCandidateWinner() {
        this.candidatewinner = this.allAuctionsSorted[0];
    }

    displayAuctionsList() {
        var endIndex: number = 6 * this.showMore;
        if (endIndex > this.allAuctionsSorted.length) {
            endIndex = this.allAuctionsSorted.length;
        }
        this.auctions = this.allAuctionsSorted.slice(0, endIndex);
    }

    onClickShowMore() {
        this.showMore++;
        this.displayAuctionsList();
    }

}

