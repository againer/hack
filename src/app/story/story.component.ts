import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  storyId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter(params => params.id))
      .subscribe(params => (this.storyId = params.id));
  }
}
