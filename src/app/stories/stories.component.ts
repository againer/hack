import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  storyIds: number[];
  allStoryIds: number[] = [];
  storyType: string = 'all';
  page: number = 1;

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  navigate(offset) {
    this.router.navigate([`/${this.storyType}`], {
      queryParams: { p: this.page + offset },
    });
  }

  ngOnInit(): void {
    this.storyType = this.route.snapshot.url.length
      ? this.route.snapshot.url[0].path
      : 'all';

    this.route.queryParams.subscribe(queryParam => {
      const queryPage = parseInt(queryParam.p || '1');

      this.storiesService.getStories(this.storyType).subscribe(storyIds => {
        this.page = queryPage >= 0 ? queryPage : 1;
        // A little bit hacky - instead of hitting the stories API
        // each time there is a query param change, refer to the existing
        // cache of storyIds and slice that list.  If the cache isn't
        // populated, then populate it with stories from HN's API.
        if (this.allStoryIds.length) {
          this.storyIds = this.allStoryIds.slice(
            (this.page - 1) * 30,
            this.page * 30,
          );
        } else {
          this.allStoryIds = storyIds;
          this.storyIds = storyIds.slice((this.page - 1) * 30, this.page * 30);
        }
      });
    });
  }
}
