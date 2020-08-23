import { Component, Input, OnInit } from '@angular/core';

import { Story } from '../story';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() story: Story;

  constructor() {}

  ngOnInit(): void {}
}
