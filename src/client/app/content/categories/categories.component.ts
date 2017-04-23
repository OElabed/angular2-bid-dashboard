import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../shared/services/product/product.service';
import { CategoryService } from '../../shared/services/category/category.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

import { Product } from '../../shared/models/product';
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

    products: Product[] = [];
    categories: Category[] = [];
    breadcrumbs: Breadcrumb[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        private breadcrumbService: BreadcrumbService
    ) { }

    ngOnInit() {
        this.categoryService
            .get()
            .subscribe(
         /* happy path */ c => this.categories = c,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

        this.productService
            .getAll()
            .subscribe(
         /* happy path */ p => this.products = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

        this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('categories');
    }

}

