import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomentPipeModule } from '../../../pipes/moment/moment.module';
import { TruncateModule } from '../../../pipes/truncate/truncate.module';

import { BidFeatureComponent } from './index';


@NgModule({
    imports: [CommonModule, TruncateModule, MomentPipeModule],
    declarations: [BidFeatureComponent],
    exports: [BidFeatureComponent]
})

export class BidFeatureModule { }
