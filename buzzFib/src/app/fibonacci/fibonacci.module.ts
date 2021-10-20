import { NgModule } from '@angular/core';

import { FibonacciComponent } from './features/fibonacci/fibonacci.component';
import { ShareModule } from '../share/share.module';
import { CommonModule } from '@angular/common';
import { FibonacciRoutingModule } from './fibonacci-routing.module';


@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    FibonacciRoutingModule
  ]
})
export class FibonacciModule { }
