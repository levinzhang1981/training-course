import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {AuthGuard} from './_helpers';
import {AppComponent} from "./app.component";

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const templateSyntaxModule = () => import('./template-syntax/template-syntax.module').then(x => x.TemplateSyntaxModule);

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', loadChildren: usersModule},
    {path: 'account', loadChildren: accountModule},
    {path: 'template-syntax', loadChildren: templateSyntaxModule},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
