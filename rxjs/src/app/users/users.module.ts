import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {LayoutComponent} from './layout.component';
import {ListComponent} from './list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent
    ]
})
export class UsersModule {
}