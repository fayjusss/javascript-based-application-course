import {Component} from '@angular/core';
import {DataService} from '../data/data.service';
import {Song} from '../Song';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private dataService: DataService) {
  }

  displayedColumns = ['title', 'genre', 'artist', 'album', 'key', 'date_posted', 'delete'];
  dataSource = new SongDataSource(this.dataService);
}

export class SongDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Song[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
