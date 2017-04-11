import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './notFound.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent]
})

export class PageNotFoundModule { }
