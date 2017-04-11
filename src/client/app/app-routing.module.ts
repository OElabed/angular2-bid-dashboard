import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccessRoutes } from './access/index';

import { ContentRoutes } from './content/index';

import { PageNotFoundComponent } from './access/not-found/index';

@NgModule({
  imports: [
    RouterModule.forRoot([
      ...AccessRoutes,
      ...ContentRoutes,
      { path: '', redirectTo: '/content/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

