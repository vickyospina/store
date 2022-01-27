import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmaPageComponent } from './confirma-page.component';

const routes: Routes = [{ path: '', component: ConfirmaPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmaPageRoutingModule { }
