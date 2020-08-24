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
  @Input() story: Story;
  @Input() index: number;
  @Input() page: number;

  constructor(private storiesService: StoriesService) {}

  createDomain(url): string {
    if (!url) {
      return;
    }

    const [start, middle, end] = new URL(url).hostname.split('.');
    return end ? `${middle}.${end}` : `${start}.${middle}`;
  }

  // Decorate `story` with `domain` and `timeAgo` for display purposes.
  decorateStory(story: Story) {
    return {
      ...story,
      domain: this.createDomain(story.url),
      timeAgo: moment.unix(story.time).fromNow(),
    };
  }

  ngOnInit(): void {
    // If we already have the story in context,
    // don't fetch it again-simply decorate.
    // Otherwise, fetch the story and decorate.
    // This way, we can avoid double fetching if the parent
    // already has the story in hand.
    if (this.story) {
      this.story = this.decorateStory(this.story);
    } else {
    }

    this.storiesService
      .getStory(this.storyId)
      .subscribe(
        story => (this.story = this.decorateStory(story)),
        error => console.log(`error snagging story ${this.storyId}`),
      );
  }
}
