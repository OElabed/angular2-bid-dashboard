import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'digit'
})
export class DigitPipe implements PipeTransform {
    transform(value: string): string {

        var number = +value;
        var result: string = value;
        if (number < 10) {
            result = ('0' + number).slice(-2);
        }
        return result;
    }
}
