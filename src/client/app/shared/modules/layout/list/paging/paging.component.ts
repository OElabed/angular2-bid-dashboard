import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'paging-cmp',
    templateUrl: 'paging.component.html',
})

export class PagingComponent implements OnChanges {

    @Input()
    pageNumber: number;

    @Input()
    pageLimit: number;

    pages:number[];

    ngOnChanges(changes: SimpleChanges) {
        if (changes['pageLimit']) {
            this.pages = Array.from(new Array(this.pageLimit), (x,i) => i+1);
        }
    }

}
