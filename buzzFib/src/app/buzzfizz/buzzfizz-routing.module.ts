import { BuzzfizzrxjsComponent } from './features/buzzfizzrxjs/buzzfizzrxjs.component';
import { BuzzfizzComponent } from './features/buzzfizz/buzzfizz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'game',
    component: BuzzfizzComponent
  },
  {
    path: 'gameRxjs',
    component: BuzzfizzrxjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuzzFizzRoutingModule { }
