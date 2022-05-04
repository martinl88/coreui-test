import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestiksComponent } from './testiks.component';
import { TestiksRoutingModule } from './testiks-routing.module';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    TestiksComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    TestiksRoutingModule
  ]
})
export class TestiksModule { }
