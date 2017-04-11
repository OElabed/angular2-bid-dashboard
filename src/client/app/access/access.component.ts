import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
*	This class represents the lazy loaded AccessComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'access-cmp',
	templateUrl: 'access.component.html'
})

export class AccessComponent {

	constructor(private router: Router) {
		router.events.subscribe((val) => {
			// see also 
			console.log(val);
		});
	}
}
