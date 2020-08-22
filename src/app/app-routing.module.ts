import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { BestComponent } from './best/best.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  { path: 'all', component: AllComponent },
  { path: 'best', component: BestComponent },
  { path: 'top', component: TopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
