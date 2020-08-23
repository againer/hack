import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { Story } from '../story';
import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() commentId: number;

  story: Story;

  constructor(private router: Router, private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.storiesService.getStory(this.commentId).subscribe(
      story =>
        (this.story = {
          ...story,
          timeAgo: moment.unix(story.time).fromNow(),
        }),
    );
  }
}
