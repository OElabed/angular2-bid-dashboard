import { Component, OnInit } from '@angular/core';

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'page-notfound-cmp',
    templateUrl: 'not-found.component.html'
})

export class PageNotFoundComponent implements OnInit {
    ngOnInit() {
        document.querySelector('body').className = 'four-zero-four';
    }
}
