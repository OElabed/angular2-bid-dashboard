import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';

import { ContentComponent } from './content.component';
import { TopNavModule } from '../shared/modules/layout/topnav/topNav.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HomeModule,
        TopNavModule
    ],
    declarations: [ContentComponent],
    exports: [ContentComponent]
})

export class ContentModule { }
