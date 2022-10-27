import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // canActivate: [AuthGuardGuard]
  }, {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
