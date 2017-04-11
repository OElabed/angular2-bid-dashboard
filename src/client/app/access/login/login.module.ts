import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

import { ReactiveFormsModule } from '@angular/forms';

import { LogoAccessModule } from '../../shared/modules/layout/logo-access/logoAccess.module';

import { FocusedInputDirective } from '../../shared/directives/style/mdFocused.directive';

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, LogoAccessModule],
    declarations: [LoginComponent, FocusedInputDirective],
    exports: [LoginComponent, FocusedInputDirective]
})

export class LoginModule { }
