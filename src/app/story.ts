export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  // optional fields used for decoration purposes.
  domain?: string;
  timeAgo?: string;
}
