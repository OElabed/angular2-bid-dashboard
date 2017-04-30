import { Pipe, PipeTransform } from '@angular/core';

import { MomentUtils } from '../../utils/moment.utils';


@Pipe({
    name: 'counterdate'
})
export class MomentConterPipe implements PipeTransform {
    transform(value: string): string {

        return MomentUtils.delayFromNow(value);
    }
}
