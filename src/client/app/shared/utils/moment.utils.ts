import * as moment from 'moment';

import { Counter } from '../models/timer';

export class MomentUtils {

    static counterFromNow(time: string, duration: number): Counter {
        if (time) {
            var delay = MomentUtils.delayFromNow(time, duration);
            var timeParts = delay.split(':');

            return <Counter>({
                hours: +timeParts[0],
                minutes: +timeParts[1],
                seconds: +timeParts[2]
            });
        }

        return <Counter>({});

    }

    static delayFromNow(time: string, duration: number): string {

        var now = moment();
        var time_end = moment().add(duration, 'minutes');
        // TODO change to this time in real world
        //var time_end = moment(time).add(duration, 'minutes');

        var milliseconds = now.diff(time_end);
        var durationDiff = moment.duration(milliseconds);
        var result = Math.abs(Math.floor(durationDiff.asHours())) + moment.utc(milliseconds).format(':mm:ss');
        return result;
    }

    static calendarDate(time: string): string {

        var result = moment(time).format('DD/MM/YYYY');

        return result;
    }

    static dateOnTimeFormat(time: string): string {

        var result = moment(time).format('DD/MM/YYYY on HH:mm:ss');
        return result;
    }
}
