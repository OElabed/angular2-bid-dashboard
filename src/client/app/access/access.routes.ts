import { Route } from '@angular/router';

import { LoginRoutes } from './login/index';
import { SignupRoutes } from './signup/index';
import { ForgetPasswordRoutes } from './forget-password/index';
import { PageNotFoundRoutes } from './not-found/index';

import { AccessComponent } from './index';

export const AccessRoutes: Route[] = [
  	{
    	path: 'access',
    	component: AccessComponent,
    	children: [
	    	...LoginRoutes,
			...SignupRoutes,
			...ForgetPasswordRoutes,
			...PageNotFoundRoutes
    	]
  	}
];
