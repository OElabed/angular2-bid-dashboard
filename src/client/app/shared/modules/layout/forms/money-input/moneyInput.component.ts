import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'money-input-cmp',
    templateUrl: 'money-input.component.html',
})

export class MoneyInputComponent {

    @Output()
    change: EventEmitter<number> = new EventEmitter<number>();

    @Input()
    moneyBid: number = 0;

    constructor() {
        this.moneyBid = 0;
    }

    upMony() {
        this.moneyBid += 5;
        this.change.emit(this.moneyBid);
    }

    downMony() {
        if (this.moneyBid >= 5) {
            this.moneyBid -= 5;
            this.change.emit(this.moneyBid);
        }

    }

}
