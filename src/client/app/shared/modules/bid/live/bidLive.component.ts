import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Bid } from '../../../models/bid';
import { Counter } from '../../../models/bid';

@Component({
    moduleId: module.id,
    selector: 'bid-live-cmp',
    templateUrl: 'bid-live.component.html'
})

export class BidLiveComponent implements OnChanges {

    @Input()
    data: Bid;

    timer: NodeJS.Timer;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {

            this.lunchCounter(this.data.time_end);
            //this.getFeatureBid(this.data);
        }
    }

    lunchCounter(counter: Counter) {
        counter.hours = 0;
        counter.minutes = 1;
        counter.seconds = 1;
        this.timer = setInterval(() => this.tick(counter), 1000);
    }

    tick(counter: Counter): void {
        if (--counter.seconds < 0) {
            counter.seconds = 59;
            if (--counter.minutes < 0) {
                counter.minutes = 59;
                counter.seconds = 59;
                if (--counter.hours < 0) {
                    this.resetCounter(counter);
                }
            }
        }
    }

    resetCounter(counter: Counter): void {
        clearInterval(this.timer);
        counter.hours = 0;
        counter.minutes = 0;
        counter.seconds = 0;
    }

}
