import { Component, OnInit } from '@angular/core';

import { BidService } from '../../shared/services/bid/bid.service';
import { CategoryService } from '../../shared/services/category/category.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

import { Category } from '../../shared/models/category';
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

    categories: Category[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    categoryAll: Category;

    breadcrumbs: Breadcrumb[] = [];

    constructor(
        private categoryService: CategoryService,
        private breadcrumbService: BreadcrumbService
    ) { }

    ngOnInit() {

        this.categoryAll = <Category>({ id: 0, name: 'All' });


        this.categoryService
            .get()
            .subscribe(
         /* happy path */ c => this.categories = c,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

        this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('featureAuctions');
    }
}

