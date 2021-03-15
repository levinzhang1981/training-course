import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from "./app.component";

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    {path: "", component: AppComponent, loadChildren: usersModule},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
