import { NgModule } from '@angular/core';

import { MomentConterPipe } from './moment-counter.pipe';
import { MomentCalendarPipe } from './moment-calendar.pipe';

@NgModule({
    imports: [],
    declarations: [MomentConterPipe, MomentCalendarPipe],
    exports: [MomentConterPipe, MomentCalendarPipe]
})
export class MomentPipeModule {
}
