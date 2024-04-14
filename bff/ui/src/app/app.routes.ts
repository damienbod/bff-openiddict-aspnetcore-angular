import { Route } from '@angular/router';
import { CallApiComponent } from './call-api/call-api.component';

export const appRoutes: Route[] =  [
  {
    path: 'call-api',
    component: CallApiComponent
  }
];