import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { BidService } from '../../../../shared/services/bid/bid.service';

import { Category } from '../../../../shared/models/category';
import { Bid } from '../../../../shared/models/bid';

@Component({
    moduleId: module.id,
    selector: 'category-feature-cmp',
    templateUrl: 'category-feature.component.html',
})

export class CategoryFeatureComponent implements OnChanges {

    bids: Bid[];
    errorMessage: string = '';
    isLoading: boolean = true;

    @Input()
    data: Category;


    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.getFeatureBid(this.data);
        }
    }


    constructor(private bidService: BidService) { }

    getFeatureBid(category: Category) {

        if (category) {

            this.bidService
                .getFeatureByCategoryPage(this.data.id, 1, 3)
                .subscribe(
         /* happy path */ p => this.bids = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
        }
    }
}

