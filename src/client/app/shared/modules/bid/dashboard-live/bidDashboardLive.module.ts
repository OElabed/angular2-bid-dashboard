import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncateModule } from '../../../pipes/truncate/truncate.module';
import { MomentPipeModule } from '../../../pipes/moment/moment.module';
import { DigitPipeModule } from '../../../pipes/digit/digit.module';

import { AuctionsService } from '../../../services/auctions/auctions.service';

import { BidDashboardLiveComponent } from './index';


@NgModule({
    imports: [CommonModule, TruncateModule, MomentPipeModule, DigitPipeModule],
    declarations: [BidDashboardLiveComponent],
    exports: [BidDashboardLiveComponent],
    providers: [AuctionsService]
})

export class BidDashboardLiveModule { }
