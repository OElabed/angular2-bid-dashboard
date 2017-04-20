import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryLiveComponent } from './index';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [CategoryLiveComponent],
    exports: [CategoryLiveComponent]
})

export class CategoryLiveModule { }
