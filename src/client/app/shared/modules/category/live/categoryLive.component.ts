import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ProductService } from '../../../../shared/services/product/product.service';

import { Category } from '../../../../shared/models/category';
import { Product } from '../../../../shared/models/product';

@Component({
    moduleId: module.id,
    selector: 'category-live-cmp',
    templateUrl: 'category-live.component.html',
})

export class CategoryLiveComponent implements OnChanges {

    products: Product[];
    errorMessage: string = '';
    isLoading: boolean = true;

    @Input()
    data: Category;


    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.getLiveProduct(this.data);
        }
    }


    constructor(private productService: ProductService) { }

    getLiveProduct(category: Category) {

        if (category) {

            this.productService
                .getByCategoryPage(this.data.id,1,4)
                .subscribe(
         /* happy path */ p => this.products = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
        }


    }
}
