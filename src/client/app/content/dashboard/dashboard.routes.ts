import { Route } from '@angular/router';
import { DashboardComponent } from './index';
import { LiveDashboardRoutes } from './live-bids/index';
import { WatchDashboardRoutes } from './watch-bids/index';

export const DashboardRoutes: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: LiveDashboardRoutes.path, pathMatch: 'full' },
            LiveDashboardRoutes,
            WatchDashboardRoutes
        ]
    }
];
