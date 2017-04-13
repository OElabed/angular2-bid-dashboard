import { Component, ElementRef, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.component.html',
})

export class TopNavComponent implements OnInit {

    elementRef: ElementRef;

    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
        jQuery('.js-search').on('click', function () {
            jQuery('.search-bar').addClass('open');
            jQuery('.search-bar').find('input[type="text"]').focus();
        });

        jQuery('.search-bar').find('.close-search').on('click', function () {
            jQuery('.search-bar').removeClass('open');
            jQuery('.search-bar').find('input[type="text"]').val('');
        });
    }

}
