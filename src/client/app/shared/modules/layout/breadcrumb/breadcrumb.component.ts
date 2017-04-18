import { Component, Input } from '@angular/core';

import { Breadcrumb } from '../../../models/breadcrumb';

@Component({
    moduleId: module.id,
    selector: 'breadcrumb-cmp',
    templateUrl: 'breadcrumb.component.html',
})

export class BreadcrumbComponent {


    inActivelinkList: Breadcrumb[] = [];

    @Input()
    data: Breadcrumb[];

    getActiveBreadcrumb(): Breadcrumb[] {
        var activeLinkList: Breadcrumb[] = [];
        this.data.forEach((item, index) => {
            if (item.active) {
                activeLinkList.push(item);
            }
        });
        return activeLinkList;
    }


    getInActiveBreadcrumb(): Breadcrumb[] {
        var inActivelinkList: Breadcrumb[] = [];
        this.data.forEach((item, index) => {
            if (!item.active) {
                inActivelinkList.push(item);
            }
        });
        return inActivelinkList;
    }

}
