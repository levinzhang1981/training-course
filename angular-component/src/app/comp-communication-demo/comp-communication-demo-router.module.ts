import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CompCommunicationDemoComponent} from "./comp-communication-demo.component";

const routes: Routes = [
    {
        path: '', component: CompCommunicationDemoComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompCommunicationDemoRouterModule {
}
