import { Component, OnInit } from '@angular/core';

import { Story } from '../story';
import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  stories: Story[];

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.getStories();
  }

  getStories(): void {
    this.stories = this.storiesService.getStories(1);
  }
}
