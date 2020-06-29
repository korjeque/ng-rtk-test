import {Routes} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/feature', pathMatch: 'full' },
  {path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];
