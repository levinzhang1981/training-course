import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AnotherHomeComponent} from './another-home/another-home.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {MessageComponent} from './message/message.component';
import {MessageServiceInjectionToken} from "./service/message.service";
import {PlainMessageService} from "./service/plain-message.service";
import {IsolatedHomeComponent} from "./isolated-home/isolated-home.component";


@NgModule({
    declarations: [AppComponent, HomeComponent, AnotherHomeComponent, IsolatedHomeComponent, MessageComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: MessageServiceInjectionToken,
            useClass: PlainMessageService
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
