import { Component, OnInit } from '@angular/core';

/**
*	This class represents the lazy loaded SignupComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'signup-cmp',
    templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit {
    ngOnInit() {
        document.querySelector('body').className = 'signup-page';
    }
}
