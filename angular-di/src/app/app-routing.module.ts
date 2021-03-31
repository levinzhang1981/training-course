import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AnotherHomeComponent} from "./another-home/another-home.component";
import {IsolatedHomeComponent} from "./isolated-home/isolated-home.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'another-home', component: AnotherHomeComponent},
    {path: 'isolated-home', component: IsolatedHomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
