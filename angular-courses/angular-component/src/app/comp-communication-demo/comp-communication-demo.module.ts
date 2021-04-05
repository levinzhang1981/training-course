import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompCommunicationDemoRouterModule} from "./comp-communication-demo-router.module";
import {
    CountdownLocalVarParentComponent, CountdownServiceParentComponent,
    CountdownTimerComponent,
    CountdownTimerService,
    CountdownViewChildParentComponent
} from "./countdown-timer.component";
import {CompCommunicationDemoComponent} from "./comp-communication-demo.component";


@NgModule({
    declarations: [
        CountdownTimerComponent,
        CountdownLocalVarParentComponent,
        CountdownViewChildParentComponent,
        CountdownServiceParentComponent,
        CompCommunicationDemoComponent
    ],
    imports: [
        CommonModule,
        CompCommunicationDemoRouterModule
    ],
    providers: [
        CountdownTimerService
    ]
})
export class CompCommunicationDemoModule {
}
