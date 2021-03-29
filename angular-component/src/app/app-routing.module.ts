import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home';
import {AnotherHomeComponent} from "./another-home";

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'another-home', component: AnotherHomeComponent},
    {path: 'users', loadChildren: usersModule},
    {path: 'account', loadChildren: accountModule},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
