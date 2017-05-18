import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { PageData } from './paging.model';

@Component({
    moduleId: module.id,
    selector: 'paging-cmp',
    templateUrl: 'paging.component.html',
})

export class PagingComponent implements OnChanges {

    @Input()
    pageData: PageData;

    pages: number[];

    collectionsPages: Array<number>[] = [];
    indexCollectionsPages: number = 0;

    chevronLeftActive: boolean = false;
    chevronRightActive: boolean = false;

    @Output()
    change: EventEmitter<number> = new EventEmitter<number>();


    ngOnChanges(changes: SimpleChanges) {
        if (changes['pageData']) {

            this.createCollectionsPages(this.pageData);
            this.indexCollectionsPages = Math.floor(this.pageData.current / this.pageData.pages_size);
            this.loadActualCollectionPages();

        }
    }

    onClick(page: number) {
        this.pageData.current = page;
        this.change.emit(page);
    }

    onPageLeftClick() {
        if (this.chevronLeftActive) {
            this.indexCollectionsPages--;
            this.loadActualCollectionPages();
            this.onClick(this.collectionsPages[this.indexCollectionsPages][0]);
        }
    }

    onPageRightClick() {

        if (this.chevronRightActive) {
            this.indexCollectionsPages++;
            this.loadActualCollectionPages();
            this.onClick(this.collectionsPages[this.indexCollectionsPages][0]);
        }

    }


    createCollectionsPages(pageData: PageData) {
        var pages = Array.from(new Array(pageData.pages_size), (x, i) => i + 1);
        console.debug(pages);
        var collectionsNumber: number = Math.ceil(pageData.pages_size / pageData.page_collections_size);

        this.collectionsPages[0] = [];

        var index: number = 0;

        pages.forEach((item) => {
            if (item <= (index + 1) * pageData.page_collections_size) {
                this.collectionsPages[index].push(item);
            } else {
                index++;
                if (index < collectionsNumber) {
                    this.collectionsPages[index] = [];
                    this.collectionsPages[index].push(item);
                }
            }
        });

        console.debug(this.collectionsPages);

    }

    loadActualCollectionPages() {
        this.pages = this.collectionsPages[this.indexCollectionsPages];
        if (this.indexCollectionsPages === 0) {
            this.chevronLeftActive = false;
            if (this.collectionsPages.length > 1) {
                this.chevronRightActive = true;
            } else {
                this.chevronRightActive = false;
            }

        } else if (this.indexCollectionsPages === this.collectionsPages.length - 1) {

            this.chevronRightActive = false;
            if (this.collectionsPages.length > 1) {
                this.chevronLeftActive = true;
            } else {
                this.chevronLeftActive = false;
            }

        } else {
            if (this.collectionsPages.length > 1) {
                this.chevronLeftActive = true;
                this.chevronRightActive = true;
            } else {
                this.chevronLeftActive = false;
                this.chevronRightActive = false;
            }
        }
    }

}
