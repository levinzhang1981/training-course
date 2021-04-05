import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoneVeComponent} from "./none-ve.component";
import {EmulatedVeComponent} from "./emulated-ve.component";
import {ShadowDomVeComponent} from "./shadow-dom-ve.component";
import {ViewEncapsulationDemoRouterModule} from "./view-encapsulation-demo-router.module";

@NgModule({
    declarations: [
        NoneVeComponent,
        EmulatedVeComponent,
        ShadowDomVeComponent
    ],
    imports: [
        CommonModule,
        ViewEncapsulationDemoRouterModule
    ]
})
export class ViewEncapsulationDemoModule {
}
