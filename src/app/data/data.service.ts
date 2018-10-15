import {Injectable} from '@angular/core';
import {Song} from '../Song';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs';


@Injectable()
export class DataService {

  ELEMENT_DATA: Song[] = [
    {position: 0, title: 'Let It Be', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {position: 1, title: 'Blackbird', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {position: 2, title: 'Something', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {position: 3, title: 'Hey Jude', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {position: 4, title: 'Yesterday', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {position: 5, title: 'Michelle', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
  ];
  genres = [
    {value: 'Rock', viewValue: 'Rock'},
    {value: 'Pop', viewValue: 'Pop'},
    {value: 'Folk', viewValue: 'Folk'}
  ];

  constructor() {
  }

  getData(): Observable<Song[]> {
    return of<Song[]>(this.ELEMENT_DATA);
  }

  getGenres() {
    return this.genres;
  }

  addSong(data) {
    this.ELEMENT_DATA.push(data);
  }

  deleteSong(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
