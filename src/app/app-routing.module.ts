import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  // all - latest stories.
  { path: 'all', component: StoriesComponent },
  // best - best stories.
  { path: 'best', component: StoriesComponent },
  // top - top stories.
  { path: 'top', component: StoriesComponent },
  { path: 'item', component: StoryComponent },
  // default to latest? stories.
  { path: '', component: StoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
