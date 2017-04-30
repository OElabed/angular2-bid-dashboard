import * as moment from 'moment';

export class MomentUtils {

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
