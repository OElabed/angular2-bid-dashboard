import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { MenuItem } from '../../models/breadcrumb';
import { Breadcrumb } from '../../models/breadcrumb';
import { BreadcrumbSubItem } from '../../models/breadcrumb';
import { BreadcrumbConst } from './breadcrumb.const';

/**
 * This class provides the Product service with methods to read names and add names.
 */
@Injectable()
export class BreadcrumbService {

    public getBreadcrumsLink(page: string, subbredcrumb?: BreadcrumbSubItem): Breadcrumb[] {
        var itemBreadcrums: Breadcrumb[] = [];

        switch (page) {
            case 'liveAuctions':
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_HOME, active: false });
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_LIVE_AUCTIONS, active: true });
                break;
            case 'featureAuctions':
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_HOME, active: false });
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_FEATURE_AUCTIONS, active: true });
                break;
            case 'dashboard':
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_HOME, active: false });
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_DASHBOARD, active: true });
                break;
            case 'categories':
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_HOME, active: false });
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_CATEGORIES, active: true });
                break;
            case 'category':
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_HOME, active: false });
                if (subbredcrumb !== null) {
                    itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_CATEGORIES, active: false });
                    itemBreadcrums.push({
                        menu: BreadcrumbConst.breadcrumbItem(
                            subbredcrumb.name,
                            BreadcrumbConst.BREAD_CRUMB_CATEGORY.link,
                            subbredcrumb.sublink
                        ),
                        active: true
                    });

                } else {
                    itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_CATEGORIES, active: true });
                }

                break;
            case 'liveBid':
                itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_LIVE_AUCTIONS, active: false });
                if (subbredcrumb !== null) {
                    itemBreadcrums.push({
                        menu: BreadcrumbConst.breadcrumbItem(
                            subbredcrumb.name,
                            BreadcrumbConst.BREAD_CRUMB_BID.link,
                            subbredcrumb.sublink
                        ),
                        active: true
                    });

                } else {
                    itemBreadcrums.push({ menu: BreadcrumbConst.BREAD_CRUMB_CATEGORIES, active: true });
                }

                break;
            default:
                itemBreadcrums = [];
        }
        return itemBreadcrums;
    }
}
