import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Story } from './story';
import { STORIES } from './mock-stories';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  // This should be in some config somewhere.
  baseUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) {}

  getStory(storyId: any): Observable<any> {
    const url = `${this.baseUrl}/item/${storyId}.json`;
    return this.http.get(url);
  }

  getStories(storyType: string = 'all'): Observable<any> {
    const url: string =
      `${this.baseUrl}/${
        {
          all: 'newstories',
          best: 'beststories',
          top: 'topstories',
        }[storyType]
      }.json` || `${this.baseUrl}/newstories.json`;

    return this.http.get(url);
  }
}
