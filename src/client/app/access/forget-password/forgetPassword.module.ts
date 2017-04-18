import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { ForgetPasswordComponent } from './forgetPassword.component';

import { LogoAccessModule } from '../../shared/modules/layout/logo-access/logoAccess.module';


@NgModule({
	imports: [MaterialModule, CommonModule, RouterModule, LogoAccessModule],
	declarations: [ForgetPasswordComponent],
	exports: [ForgetPasswordComponent]
})

export class ForgetPasswordModule { }
