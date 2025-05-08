import { Routes } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';
import { ButtonComponent } from './components/button/button.component';

export const routes: Routes = [
    { path: 'login', component: ButtonComponent },
  { path: 'login/callback', component: CallbackComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
