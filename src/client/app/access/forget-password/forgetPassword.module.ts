import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forgetPassword.component';

import { LogoAccessModule } from '../../shared/modules/layout/logo-access/logoAccess.module';


@NgModule({
    imports: [CommonModule, RouterModule, LogoAccessModule],
    declarations: [ForgetPasswordComponent],
    exports: [ForgetPasswordComponent]
})

export class ForgetPasswordModule { }
