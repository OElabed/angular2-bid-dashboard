import { Component, OnInit } from '@angular/core';

import { BidService } from '../../shared/services/bid/bid.service';
import { CategoryService } from '../../shared/services/category/category.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

import { Bid } from '../../shared/models/bid';
import { Category } from '../../shared/models/category';
import { Breadcrumb } from '../../shared/models/breadcrumb';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'categories-cmp',
    templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit {

    bids: Bid[] = [];
    categories: Category[] = [];
    breadcrumbs: Breadcrumb[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(
        private categoryService: CategoryService,
        private bidService: BidService,
        private breadcrumbService: BreadcrumbService
    ) { }

    ngOnInit() {
        this.categoryService
            .get()
            .subscribe(
         /* happy path */ c => this.categories = c,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

        this.bidService
            .getAll()
            .subscribe(
         /* happy path */ p => this.bids = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

        this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('categories');
    }

}

