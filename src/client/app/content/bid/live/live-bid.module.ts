import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveBidComponent } from './live-bid.component';

import { TruncateModule } from '../../../shared/pipes/truncate/truncate.module';
import { MomentPipeModule } from '../../../shared/pipes/moment/moment.module';
import { DigitPipeModule } from '../../../shared/pipes/digit/digit.module';
import { BreadcrumbModule } from '../../../shared/modules/layout/breadcrumb/breadcrumb.module';

import { BidService } from '../../../shared/services/bid/bid.service';
import { BreadcrumbService } from '../../../shared/services/breadcrumb/breadcrumb.service';

@NgModule({
    imports: [CommonModule, BreadcrumbModule, TruncateModule, MomentPipeModule, DigitPipeModule],
    declarations: [LiveBidComponent],
    exports: [LiveBidComponent],
    providers: [BreadcrumbService, BidService]
})

export class LiveBidModule { }
