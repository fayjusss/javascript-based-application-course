import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-song-dialog',
  templateUrl: './song-dialog.component.html',
  styleUrls: ['./song-dialog.component.css']
})
export class SongDialogComponent {
  song = {
    title: '',
    genre: '',
    artist: '',
    album: '',
    key: '',
    position: 0,
    date_posted: new Date()
  };

  genres = this.dataService.getGenres();

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<SongDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.song.position = this.dataService.dataLength();
    this.event.emit({data: this.song});
    this.dialogRef.close();
  }
}
