import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { User } from '../../shared/models/user';

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
 moduleId: module.id,
 selector: 'login-cmp',
 templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

 user: FormGroup;

 submitted = false;

 public loginForm = this.fb.group({
  email: ['', Validators.required],
  password: ['', Validators.required]
 });

	constructor(public fb: FormBuilder) { }

	ngOnInit() {
		document.querySelector('body').className = 'login-page';

		this.user = this.fb.group({
			email: ['', [Validators.required, CustomValidators.email]],
			password: ['', [Validators.required, Validators.minLength(2)]]
		});
	}

	onSubmit({ value, valid }: { value: User, valid: boolean }) {
		console.log(value, valid);
	}

}
