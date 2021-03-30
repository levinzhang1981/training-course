import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home';
import {AnotherHomeComponent} from "./another-home";

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const viewEncapsulationModule = () => import('./view-encapsulation-demo/view-encapsulation-demo.module').then(x => x.ViewEncapsulationDemoModule);
const compCommunicationModule = () => import('./comp-communication-demo/comp-communication-demo.module').then(x => x.CompCommunicationDemoModule);

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'another-home', component: AnotherHomeComponent},
    {path: 'users', loadChildren: usersModule},
    {path: 'account', loadChildren: accountModule},
    {path: 'view-encapsulation', loadChildren: viewEncapsulationModule},
    {path: 'comp-communication', loadChildren: compCommunicationModule},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
