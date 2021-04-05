import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent as List1Component} from "./sample-1-raw-filter/list.component";
import {ListComponent as List2Component} from "./sample-2-debounce/list.component";
import {ListComponent as List3Component} from "./sample-3-lowercase/list.component";
import {ListComponent as List4Component} from "./sample-4-from-event/list.component";
import {ListComponent as List5Component} from "./sample-5-multiple-subscriber/list.component";
import {ListComponent as List6Component} from "./sample-6-tap-utility/list.component";
import {ListComponent as List7Component} from "./sample-7-combine-latest/list.component";

const routes: Routes = [
    {path: "1", component: List1Component},
    {path: "2", component: List2Component},
    {path: "3", component: List3Component},
    {path: "4", component: List4Component},
    {path: "5", component: List5Component},
    {path: "6", component: List6Component},
    {path: "7", component: List7Component},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SampleRoutingModule {
}
