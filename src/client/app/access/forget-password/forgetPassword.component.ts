import { Component, OnInit } from '@angular/core';

/**
*	This class represents the lazy loaded ForgetPasswordComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'forget-password-cmp',
	templateUrl: 'forget-password.component.html'
})

export class ForgetPasswordComponent implements OnInit {
	ngOnInit() {
		document.querySelector('body').className = 'fp-page';
	}
}
