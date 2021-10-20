import { BuzzFizzRoutingModule } from './buzzfizz-routing.module';
import { NgModule } from '@angular/core';
import { BuzzfizzComponent } from './features/buzzfizz/buzzfizz.component';
import { ShareModule } from '../share/share.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BuzzfizzComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    BuzzFizzRoutingModule
  ]
})
export class BuzzfizzModule { }
