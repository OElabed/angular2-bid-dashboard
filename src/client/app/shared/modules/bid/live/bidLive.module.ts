import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeModule } from '../../../../core/pipes/pipe.module';

import { BidLiveComponent } from './index';


@NgModule({
    imports: [CommonModule, PipeModule],
    declarations: [BidLiveComponent],
    exports: [BidLiveComponent]
})

export class BidLiveModule { }
