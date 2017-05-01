import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../shared/services/category/category.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

import { ActivatedRoute } from '@angular/router';

import { Category } from '../../shared/models/category';
import { Breadcrumb } from '../../shared/models/breadcrumb';
import { BreadcrumbSubItem } from '../../shared/models/breadcrumb';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'categories-cmp',
    templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit {

    categories: Category[] = [];
    breadcrumbs: Breadcrumb[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(
        private categoryService: CategoryService,
        private breadcrumbService: BreadcrumbService
    ) { }

    ngOnInit() {
        this.categoryService
            .get()
            .subscribe(
         /* happy path */ c => this.categories = c,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

        this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('categories');
    }

}

@Component({
    moduleId: module.id,
    selector: 'category-cmp',
    templateUrl: 'category.component.html'
})
export class CategoryComponent implements OnInit {

    breadcrumbs: Breadcrumb[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    category: Category = <Category>({});

    private sub: any;

    constructor(
        private categoryService: CategoryService,
        private breadcrumbService: BreadcrumbService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        var categoryId: number;

        this.sub = this.route.params.subscribe(params => {
            categoryId = +params['id']; // (+) converts string 'id' to a number

            this.categoryService
                .getById(categoryId)
                .subscribe(
         /* happy path */ c => this.category = c,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => {
                    this.isLoading = false;
                    this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('category', <BreadcrumbSubItem>({
                        name: this.category.name,
                        sublink: this.category.id.toString()
                    }));
                });
        });

    }

}

