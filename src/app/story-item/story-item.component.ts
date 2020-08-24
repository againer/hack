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
  @Input() page: number;

  story: Story;

  constructor(private storiesService: StoriesService) {}

  // It is possible for stories to exclude an external url.
  // For that case, we need to point to MN's story detail.
  createDomain(url) {
    if (!url) {
      return;
    }

    const [start, middle, end] = new URL(url).hostname.split('.');
    return end ? `${middle}.${end}` : `${start}.${middle}`;
  }

  ngOnInit(): void {
    this.storiesService.getStory(this.storyId).subscribe(
      story =>
        // Decorate `story` with `domain` and `timeAgo` for display purposes.
        (this.story = {
          ...story,
          domain: this.createDomain(story.url),
          timeAgo: moment.unix(story.time).fromNow(),
        }),
      error => console.log(`error snagging story ${this.storyId}`),
    );
  }
}
