import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Story } from '../story';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss'],
})
export class StoryItemComponent implements OnInit {
  @Input() story: Story;
  @Input() index: number;

  // this.domain should be the hostname (www.domain.com) without `www`.
  domain: string = '';
  timeAgo: string = '';

  constructor() {}

  ngOnInit(): void {
    const [start, middle, end] = new URL(this.story.url).hostname.split('.');
    this.domain = end ? `${middle}.${end}` : `${start}.${middle}`;
    this.timeAgo = moment.unix(this.story.time).fromNow();
  }
}
