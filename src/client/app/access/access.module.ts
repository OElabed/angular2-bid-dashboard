import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { ForgetPasswordModule } from './forget-password/forgetPassword.module';
import { PageNotFoundModule } from './not-found/notFound.module';

import { AccessComponent } from './access.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LoginModule,
        SignupModule,
        ForgetPasswordModule,
        PageNotFoundModule
    ],
    declarations: [AccessComponent],
    exports: [AccessComponent]
})

export class AccessModule { }
