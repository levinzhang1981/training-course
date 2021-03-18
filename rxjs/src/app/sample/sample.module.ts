import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleRoutingModule} from "./sample-routing.module";

import {ListComponent as List1Component} from "./sample-1-raw-filter/list.component";
import {ListComponent as List2Component} from "./sample-2-debounce/list.component";
import {ListComponent as List3Component} from "./sample-3-lowercase/list.component";
import {ListComponent as List4Component} from "./sample-4-from-event/list.component";
import {ListComponent as List5Component} from "./sample-5-multiple-subscriber/list.component";
import {ListComponent as List6Component} from "./sample-6-tap-utility/list.component";
import {ListComponent as List7Component} from "./sample-7-combine-latest/list.component";
import {ListComponent as EmptyStartComponent} from "./empty-start/list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        List1Component,
        List2Component,
        List3Component,
        List4Component,
        List5Component,
        List6Component,
        List7Component,
        EmptyStartComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SampleRoutingModule
    ]
})
export class SampleModule {
}
