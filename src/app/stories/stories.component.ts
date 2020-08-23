import { Component, OnInit } from '@angular/core';

import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  storyIds: number[];

  constructor(private storiesService: StoriesService) {}

  // TODO(againer): Add pagination and better slicing.
  ngOnInit(): void {
    this.storiesService
      .getStories()
      .subscribe(storyIds => (this.storyIds = storyIds.slice(0, 10)));
  }
}
