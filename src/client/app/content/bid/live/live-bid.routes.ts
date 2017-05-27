import { Route } from '@angular/router';
import { LiveBidComponent } from './index';

export const LiveBidRoutes: Route[] = [
    {
        path: 'livebid/:id',
        component: LiveBidComponent
    }
];
