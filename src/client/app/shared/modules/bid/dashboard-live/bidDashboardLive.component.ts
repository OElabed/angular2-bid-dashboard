import { Component, Input } from '@angular/core';

import { Bid } from '../../../models/bid';

@Component({
    moduleId: module.id,
    selector: 'bid-dashboard-live-cmp',
    templateUrl: 'bid-dashboard-live.component.html',
})

export class BidDashboardLiveComponent {
    @Input()
    data: Bid;
}
