import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MoneyInputComponent } from './index';


@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [MoneyInputComponent],
    exports: [MoneyInputComponent]
})

export class MoneyInputModule { }
