import { Component, Input } from '@angular/core';

import { Bid } from '../../../models/bid';

@Component({
    moduleId: module.id,
    selector: 'bid-live-cmp',
    templateUrl: 'bid-live.component.html'
})

export class BidLiveComponent {

    @Input()
    data: Bid;

}
