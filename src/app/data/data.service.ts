import {Injectable} from '@angular/core';
import {Song} from '../Song';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {

  ELEMENT_DATA: Song[] = [
    {title: 'Let It Be', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {title: 'Blackbird', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {title: 'Something', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {title: 'Hey Jude', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {title: 'Yesterday', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
    {title: 'I Want to Hold Your Hand', genre: 'Rock', artist: 'Beatles', album: 'Rubber Band', key: 'G', date_posted: new Date()},
  ];
  genres = [
    {value: 'Rock', viewValue: 'Rock'},
    {value: 'Pop', viewValue: 'Pop'},
    {value: 'Folk', viewValue: 'Folk'}
  ];

  constructor() {
  }

  getData(): Observable<Song[]> {
    return Observable.of<Song[]>(this.ELEMENT_DATA);
  }

  getGenres() {
    return this.genres;
  }

  addPost(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
