import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncateModule } from '../../../pipes/truncate/truncate.module';

import { BidLiveComponent } from './index';


@NgModule({
    imports: [CommonModule, TruncateModule],
    declarations: [BidLiveComponent],
    exports: [BidLiveComponent]
})

export class BidLiveModule { }
