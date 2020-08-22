import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  // all - latest stories.
  { path: 'all', component: StoriesComponent },
  // best - best stories.
  { path: 'best', component: StoriesComponent },
  // top - top stories.
  { path: 'top', component: StoriesComponent },
  // default to latest? stories.
  { path: '', component: StoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
