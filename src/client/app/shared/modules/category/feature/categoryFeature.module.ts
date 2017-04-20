import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryFeatureComponent } from './index';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [CategoryFeatureComponent],
    exports: [CategoryFeatureComponent]
})

export class CategoryFeatureModule { }
