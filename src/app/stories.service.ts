import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Story } from './story';
import { STORIES } from './mock-stories';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor() {}
  // getStories(): Observable<Story[]> {
  //   return of(STORIES);
  // }
  getStories(offset: number, storyType: string = 'all'): Story[] {
    // grab topstories, newstories, beststories
    // grab optional page number
    // get a list of integer ids from HN.
    // grab only subset of integer ids
    // grab story for each integer id (should be ~30).
    return STORIES;
  }
}
