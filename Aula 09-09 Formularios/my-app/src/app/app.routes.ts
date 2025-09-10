import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadComponent } from './cad/cad.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadComponent }
];
