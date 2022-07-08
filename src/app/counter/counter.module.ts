import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './counter/contador.component';



@NgModule({
  declarations: [
    ContadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContadorComponent
  ]
})
export class CounterModule { }
