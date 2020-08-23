import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { StoryComponent } from './story/story.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    StoryItemComponent,
    StoryComponent,
    CommentsComponent,
    CommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
