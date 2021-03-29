import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ViewEncapsulationDemoComponent} from "./view-encapsulation-demo.component";
import {NoneVeComponent} from "./none-ve.component";
import {EmulatedVeComponent} from "./emulated-ve.component";
import {ShadowDomVeComponent} from "./shadow-dom-ve.component";


const routes: Routes = [
    {
        path: '', component: ViewEncapsulationDemoComponent,
        children: [
            {path: 'none', component: NoneVeComponent},
            {path: 'emulated', component: EmulatedVeComponent},
            {path: 'shadow-dom', component: ShadowDomVeComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewEncapsulationDemoRouterModule {
}
