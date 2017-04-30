import { Route } from '@angular/router';
import { CategoriesComponent } from './index';
import { CategoryComponent } from './index';

export const CategoriesRoutes: Route[] = [
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'category/:id',
        component: CategoryComponent
    }
];
