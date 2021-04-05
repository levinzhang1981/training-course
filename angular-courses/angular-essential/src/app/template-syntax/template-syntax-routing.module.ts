import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TemplateSyntaxComponent} from "./template-syntax.component";


const routes: Routes = [
  {
    path: '', component: TemplateSyntaxComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateSyntaxRoutingModule { }