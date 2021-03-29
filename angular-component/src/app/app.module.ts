import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
import {fakeBackendProvider} from './_helpers';

import {AppRoutingModule} from './app-routing.module';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {AppComponent} from './app.component';
import {AlertComponent, LogConsoleComponent} from './_components';
import {HomeComponent} from './home';
import {AnotherHomeComponent} from "./another-home";
import {ViewEncapsulationDemoComponent} from './view-encapsulation-demo/view-encapsulation-demo.component';
import {NgxCodeHighlightModule} from "@ngx-tiny/code-highlight";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxCodeHighlightModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        AnotherHomeComponent,
        LogConsoleComponent,
        ViewEncapsulationDemoComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
};