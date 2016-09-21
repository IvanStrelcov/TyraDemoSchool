import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloggComponent }       from './+blogg';
import { NoContentComponent }   from './nocontent';

const Routes: Routes = [
  { path: '', redirectTo: 'blogg', pathMatch: 'full' },
  { path: 'blogg', component: BloggComponent },
  { path: 'dummie1', component: NoContentComponent },
  { path: 'dummie2', component: NoContentComponent },
  { path: 'dummie3', component: NoContentComponent },
  { path: 'dummie4', component: NoContentComponent },
  { path: 'dummie5', component: NoContentComponent },
  { path: 'dummie6', component: NoContentComponent },
  { path: 'dummie7', component: NoContentComponent },
  { path: 'dummie8', component: NoContentComponent },
  { path: '**',    component: NoContentComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(Routes, { useHash: true });