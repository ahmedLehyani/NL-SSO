import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthentificationComponent} from './views/authentification/authentification.component';
import {RegistrationComponent} from './views/registration/registration.component';
import {HomeComponent} from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: AuthentificationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
