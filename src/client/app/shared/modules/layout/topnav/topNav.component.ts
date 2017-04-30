import { Component, ElementRef, OnInit } from '@angular/core';

import { BidService } from '../../../services/bid/bid.service';
import { CategoryService } from '../../../services/category/category.service';

import { Category } from '../../../models/category';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.component.html',
})

export class TopNavComponent implements OnInit {

    elementRef: ElementRef;

    categories: Category[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(elementRef: ElementRef, private categoryService: CategoryService) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
        jQuery('.js-search').on('click', function () {
            jQuery('.search-bar').addClass('open');
            jQuery('.search-bar').find('input[type="text"]').focus();
        });

        jQuery('.search-bar').find('.close-search').on('click', function () {
            jQuery('.search-bar').removeClass('open');
            jQuery('.search-bar').find('input[type="text"]').val('');
        });

        this.categoryService
            .get()
            .subscribe(
         /* happy path */ c => this.categories = c,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
    }

}
