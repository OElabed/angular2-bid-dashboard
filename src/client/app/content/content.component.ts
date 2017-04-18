import { Component, OnInit } from '@angular/core';

/**
*	This class represents the lazy loaded ContentComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'content-cmp',
    templateUrl: 'content.component.html'
})

export class ContentComponent implements OnInit {
    ngOnInit() {
        document.querySelector('body').className = '<%= APP_THEME %>';
    }
}
