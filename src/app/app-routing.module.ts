import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { importExpr } from '@angular/compiler/src/output/output_ast';

// import { LoginComponent } from '../app/login/login.component';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const routes: Routes = [
  { path: '',
   component: PagesComponent,
   children: [
     {path: 'dashboard', component: DashboardComponent},
     {path: 'progress', component: ProgressComponent},
     {path: 'graficas1', component: Graficas1Component},
     {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
   ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
 // { path: 'login', component: LoginComponent},
  {path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
