export interface Counter {
    hours: number;
    minutes: number;
    seconds: number;
}

export class Hourglass {

    timer: NodeJS.Timer;

    constructor(counter: Counter) {
        this.lunchCounter(counter);
    }

    lunchCounter(counter: Counter) {
        this.timer = setInterval(() => this.tick(counter), 1000);
    }

    tick(counter: Counter): void {
        if (--counter.seconds < 0) {
            counter.seconds = 59;
            if (--counter.minutes < 0) {
                counter.minutes = 59;
                counter.seconds = 59;
                if (--counter.hours < 0) {
                    this.resetCounter(counter);
                }
            }
        }
    }

    resetCounter(counter: Counter): void {
        clearInterval(this.timer);
        counter.hours = 0;
        counter.minutes = 0;
        counter.seconds = 0;
    }

}
