import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { BidService } from '../../../../shared/services/bid/bid.service';

import { OnPaging, PageData } from '../../layout/list/paging';

import { Category } from '../../../../shared/models/category';
import { Bid } from '../../../../shared/models/bid';

const PAGES_COLLECTIONS_SIZE: number = 4;

@Component({
    moduleId: module.id,
    selector: 'category-live-cmp',
    templateUrl: 'category-live.component.html',
})

export class CategoryLiveComponent implements OnChanges, OnPaging {

    bids: Bid[];
    errorMessage: string = '';
    isLoading: boolean = true;


    pageData: PageData = { current: 1, pages_size: 10, page_collections_size: PAGES_COLLECTIONS_SIZE };

    @Input()
    data: Category;


    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.getLiveBid(this.data);
        }
    }


    constructor(private bidService: BidService) { }

    getLiveBid(category: Category) {

        if (category) {
            this.loadBids();

        }
    }

    onPageChange(event: any) {
        this.pageData.current = event;
        console.debug(this.pageData.current);
        this.loadBids();
    }

    loadBids() {
        this.bidService
            .getByCategoryPage(this.data.id, this.pageData.current, 4)
            .subscribe(
         /* happy path */ p => this.bids = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

    }
}
