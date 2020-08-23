import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Story } from '../story';
import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss'],
})
export class StoryItemComponent implements OnInit {
  @Input() storyId: number;
  @Input() index: number;

  story: Story;

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.storiesService.getStory(this.storyId).subscribe(
      story => {
        // It is possible for stories to exclude an external url.
        // For that case, we need to point to MN's story detail.
        // TODO (againer): Add default URL for self posts.
        const [start, middle, end] = story.url
          ? new URL(story.url).hostname.split('.')
          : ['test', 'test', 'test'];

        // decorate story with domain and timeAgo for display purposes.
        this.story = {
          ...story,
          domain: end ? `${middle}.${end}` : `${start}.${middle}`,
          timeAgo: moment.unix(story.time).fromNow(),
        };
      },
      error => console.log(`error snagging story ${this.storyId}`),
    );
  }
}
