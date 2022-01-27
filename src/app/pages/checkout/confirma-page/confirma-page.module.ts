import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmaPageRoutingModule } from './confirma-page-routing.module';
import { ConfirmaPageComponent } from './confirma-page.component';


@NgModule({
  declarations: [
    ConfirmaPageComponent
  ],
  imports: [
    CommonModule,
    ConfirmaPageRoutingModule
  ]
})
export class ConfirmaPageModule { }
