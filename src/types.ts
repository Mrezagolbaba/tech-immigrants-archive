import { Country } from './data/countries';
import { Position } from './data/positions';

export interface Links {
  email?: string;
  website?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
}

export interface VideoItem {
  thumbnail: string;
  name: string;
  countries: Country[];
  companies?: string[];
  position: Position | null;
  tags: string[];
  youtube: string;
  audio: string | null;
  links?: Links;
  publish_date: string;
}
