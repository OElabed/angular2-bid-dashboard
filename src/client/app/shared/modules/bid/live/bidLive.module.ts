import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TruncateModule } from '../../../pipes/truncate/truncate.module';
import { MomentPipeModule } from '../../../pipes/moment/moment.module';
import { DigitPipeModule } from '../../../pipes/digit/digit.module';

import { BidLiveComponent } from './index';


@NgModule({
    imports: [CommonModule, RouterModule, TruncateModule, MomentPipeModule, DigitPipeModule],
    declarations: [BidLiveComponent],
    exports: [BidLiveComponent]
})

export class BidLiveModule { }
