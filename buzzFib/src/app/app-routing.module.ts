import { BuzzfizzModule } from './buzzfizz/buzzfizz.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'buzzfizz',
    loadChildren: () => import('./buzzfizz/buzzfizz.module').then(m => m.BuzzfizzModule)
  },
  {
    path: 'fibonacci',
    loadChildren: () => import('./fibonacci/fibonacci.module').then(m => m.FibonacciModule)
  },
  {
    path: '',
    redirectTo: 'buzzfizz/game',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
