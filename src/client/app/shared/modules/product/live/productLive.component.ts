import { Component, Input } from '@angular/core';

import { Product } from '../../../models/product';

@Component({
    moduleId: module.id,
    selector: 'prod-live-cmp',
    templateUrl: 'product-live.component.html',
})

export class ProductLiveComponent {

    @Input()
    data: Product;

}
