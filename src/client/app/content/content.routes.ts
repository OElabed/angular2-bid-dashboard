import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { LiveAuctionsRoutes } from './live-auctions/index';
import { FeatureAuctionsRoutes } from './feature-auctions/index';
import { DashboardRoutes } from './dashboard/index';
import { CategoriesRoutes } from './categories/index';

import { ContentComponent } from './index';

export const ContentRoutes: Route[] = [
    {
        path: 'content',
        component: ContentComponent,
        children: [
            ...HomeRoutes,
            ...LiveAuctionsRoutes,
            ...FeatureAuctionsRoutes,
            ...DashboardRoutes,
            ...CategoriesRoutes
        ]
    }
];
