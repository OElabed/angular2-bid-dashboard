import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './topNav.component';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [TopNavComponent],
    exports: [TopNavComponent]
})

export class TopNavModule { }
