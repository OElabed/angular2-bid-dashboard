import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PagingComponent } from './paging.component';


@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [PagingComponent],
    exports: [PagingComponent]
})

export class PagingModule { }
