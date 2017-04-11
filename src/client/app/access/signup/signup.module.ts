import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';

import { LogoAccessModule } from '../../shared/modules/layout/logo-access/logoAccess.module';

@NgModule({
    imports: [CommonModule, RouterModule, LogoAccessModule],
    declarations: [SignupComponent],
    exports: [SignupComponent]
})

export class SignupModule { }
