import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from "./app.component";

const sampleModule = () => import('./sample/sample.module').then(x => x.SampleModule);

const routes: Routes = [
    {path: "", loadChildren: sampleModule},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
