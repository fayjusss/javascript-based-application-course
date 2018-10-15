import {Component} from '@angular/core';
import {DataService} from '../data/data.service';
import {AuthService} from '../auth.service';
import {Song} from '../Song';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private dataService: DataService, public auth: AuthService) {
  }

  displayedColumns = ['title', 'genre', 'artist', 'album', 'key', 'date_posted', 'delete'];
  dataSource = new SongDataSource(this.dataService);

  deletePost(id) {
    if (this.auth.isAuthenticated()) {
      this.dataService.deletePost(id);
      this.dataSource = new SongDataSource(this.dataService);
    } else {
      alert('Login in Before');
    }
  }
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
