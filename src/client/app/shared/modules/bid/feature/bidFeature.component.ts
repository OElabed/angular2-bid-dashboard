import { Component, Input } from '@angular/core';

import { Bid } from '../../../models/bid';

@Component({
    moduleId: module.id,
    selector: 'bid-feat-cmp',
    templateUrl: 'bid-feature.component.html',
})

export class BidFeatureComponent {

    @Input()
    data: Bid;
}
