import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductLiveComponent } from './index';


@NgModule({
    imports: [CommonModule],
    declarations: [ProductLiveComponent],
    exports: [ProductLiveComponent]
})

export class ProductLiveModule { }
