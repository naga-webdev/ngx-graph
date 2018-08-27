import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaterComponent } from './rater/rater.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rater' },
  { path: 'rater', component: RaterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
