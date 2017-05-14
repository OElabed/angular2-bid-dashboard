import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Bid } from '../../../models/bid';
import { Counter } from '../../../models/timer';
import { Hourglass } from '../../../models/timer';

@Component({
    moduleId: module.id,
    selector: 'bid-live-cmp',
    templateUrl: 'bid-live.component.html'
})

export class BidLiveComponent implements OnChanges {

    @Input()
    data: Bid;

    timer: Hourglass;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.timer = new Hourglass(this.data.time_end);
        }
    }

}
