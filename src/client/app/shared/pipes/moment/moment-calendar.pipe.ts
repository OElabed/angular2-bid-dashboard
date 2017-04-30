import { Pipe, PipeTransform } from '@angular/core';

import { MomentUtils } from '../../utils/moment.utils';


@Pipe({
    name: 'calendardate'
})
export class MomentCalendarPipe implements PipeTransform {
    transform(value: string): string {

        return MomentUtils.calendarDate(value);
    }
}
