import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../shared/services/product/product.service';
import { Product } from '../../shared/models/product';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'feature-auctions-home-cmp',
    templateUrl: 'feature-auctions.html'
})
export class FeatureAuctionsHomeComponent { }

@Component({
    moduleId: module.id,
    selector: 'live-auctions-home-cmp',
    templateUrl: 'live-auctions.html'
})
export class LiveAuctionsHomeComponent implements OnInit {

    products: Product[] = [];
    productsCat: Product[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(private productService: ProductService) { }

    ngOnInit() {

        this.productService
            .get(1, 4)
            .subscribe(
         /* happy path */ p => this.products = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);
    }

}

@Component({
    moduleId: module.id,
    selector: 'home-cmp',
    templateUrl: 'home.component.html'
})

export class HomeComponent { }
