import * as moment from 'moment';

import { Counter } from '../models/bid';

export class MomentUtils {

    static counterFromNow(time: string): Counter {
        if (time) {
            var delay = MomentUtils.delayFromNow(time);
            var timeParts = delay.split(':');

            return <Counter>({
                hours: +timeParts[0],
                minutes: +timeParts[1],
                seconds: +timeParts[2]
            });
        }

        return <Counter>({});

    }

    static delayFromNow(time: string): string {

        var now = moment();
        var time_end = moment(time);

        var milliseconds = now.diff(time_end);
        var duration = moment.duration(milliseconds);
        var result = Math.abs(Math.floor(duration.asHours())) + moment.utc(milliseconds).format(':mm:ss');

        return result;
    }

    static calendarDate(time: string): string {

        var result = moment(time).format('DD/MM/YYYY');

        return result;
    }
}
