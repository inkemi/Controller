import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {LoginComponent} from './auth/login/login.component';
import {DescriptionComponent} from './document/description/description.component';

const routes: Routes = [
  {path: '', component: AppLayoutComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'users',
      component: AppComponent
    },
    {
      path: 'folders',
      component: AppComponent
    },
    {
      path: 'add',
      component: DescriptionComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
