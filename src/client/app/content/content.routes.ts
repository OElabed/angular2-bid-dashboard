import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';

import { ContentComponent } from './index';

export const ContentRoutes: Route[] = [
  	{
    	path: 'content',
    	component: ContentComponent,
    	children: [
	    	...HomeRoutes
    	]
  	}
];
