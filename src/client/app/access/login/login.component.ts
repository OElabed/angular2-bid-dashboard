import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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

    loginForm: FormGroup;

    constructor() {

        this.loginForm = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        });
    }


    ngOnInit() {
        document.querySelector('body').className = 'login-page';
    }



    login() {
        let email = this.loginForm.controls['email'].value;
        let password = this.loginForm.controls['password'].value;

        console.debug(email + password);
    }

}
