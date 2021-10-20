import { ThirdPartyModule } from './../third-party/third-party.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ThirdPartyModule
  ],
  exports: [
    ReactiveFormsModule,
    ThirdPartyModule
  ]
})
export class ShareModule { }
