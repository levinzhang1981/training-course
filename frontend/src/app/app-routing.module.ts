import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const authModule = () => import('./auth/auth.module').then(module => module.AuthModule);
const adminModule = () => import('./admin/admin.module').then(module => module.AdminModule);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: authModule
  },
  {
    path: 'admin',
    loadChildren: adminModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
