import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../story';
import { StoriesService } from '../stories.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  story: Story;

  constructor(
    private route: ActivatedRoute,
    private storiesService: StoriesService,
  ) {}

  ngOnInit(): void {
    const storyId = this.route.snapshot.queryParamMap.get('id');
    this.storiesService
      .getStory(storyId)
      .subscribe(story => (this.story = story));
  }
}
