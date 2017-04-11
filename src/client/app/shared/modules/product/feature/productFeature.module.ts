import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFeatureComponent } from './index';


@NgModule({
    imports: [CommonModule],
    declarations: [ProductFeatureComponent],
    exports: [ProductFeatureComponent]
})

export class ProductFeatureModule { }
