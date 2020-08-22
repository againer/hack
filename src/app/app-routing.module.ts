import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { BestComponent } from './best/best.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  // all - latest stories.
  { path: 'all', component: AllComponent },
  // best - best stories.
  { path: 'best', component: BestComponent },
  // top - top stories.
  { path: 'top', component: TopComponent },
  // default to latest? stories.
  { path: '', component: AllComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
