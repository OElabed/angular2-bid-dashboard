import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './index';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BreadcrumbComponent],
    exports: [BreadcrumbComponent]
})

export class BreadcrumbModule { }
