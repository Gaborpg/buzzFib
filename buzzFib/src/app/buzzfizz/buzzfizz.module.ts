import { BuzzFizzRoutingModule } from './buzzfizz-routing.module';
import { NgModule } from '@angular/core';
import { BuzzfizzComponent } from './features/buzzfizz/buzzfizz.component';
import { ShareModule } from '../share/share.module';
import { CommonModule } from '@angular/common';
import { BuzzfizzrxjsComponent } from './features/buzzfizzrxjs/buzzfizzrxjs.component';



@NgModule({
  declarations: [
    BuzzfizzComponent,
    BuzzfizzrxjsComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    BuzzFizzRoutingModule
  ]
})
export class BuzzfizzModule { }
