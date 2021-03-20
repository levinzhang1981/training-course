import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {TemplateSyntaxComponent} from './template-syntax.component';
import {BigHeroDetailComponent, HeroDetailComponent} from './hero-detail.component';
import {ClickDirective, ClickDirective2} from './click.directive';
import {HeroFormComponent} from './hero-form.component';
import {heroSwitchComponents} from './hero-switch.components';
import {SizerComponent} from './sizer.component';
import {SvgComponent} from './svg.component';
import {TemplateSyntaxRoutingModule} from "./template-syntax-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TemplateSyntaxRoutingModule
    ],
    declarations: [
        TemplateSyntaxComponent,
        BigHeroDetailComponent,
        HeroDetailComponent,
        HeroFormComponent,
        heroSwitchComponents,
        ClickDirective,
        ClickDirective2,
        SizerComponent,
        SvgComponent
    ]
})
export class TemplateSyntaxModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/