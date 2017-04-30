import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { BidService } from '../../../../shared/services/bid/bid.service';

import { Category } from '../../../../shared/models/category';
import { Bid } from '../../../../shared/models/bid';

@Component({
    moduleId: module.id,
    selector: 'category-live-cmp',
    templateUrl: 'category-live.component.html',
})

export class CategoryLiveComponent implements OnChanges {

    bids: Bid[];
    errorMessage: string = '';
    isLoading: boolean = true;

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

            this.bidService
                .getByCategoryPage(this.data.id, 1, 4)
                .subscribe(
         /* happy path */ p => this.bids = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
        }
    }
}
