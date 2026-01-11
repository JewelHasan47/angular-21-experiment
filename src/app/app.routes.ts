import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'aria',
    loadComponent: () => import( '../modules/aria/pages/aria-page/aria-page' ).then(
      component => component.AriaPage
    )
  }
];
