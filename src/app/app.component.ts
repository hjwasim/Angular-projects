import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'searchandfilterapp';

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.data$ = combineLatest([this.searchQuery$, this.service.data]).pipe(
      map(([searchQuery, data]) =>
        data.filter((x) => x.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );
  }

  data$ = new Observable<string[]>();
  searchQuery$ = new BehaviorSubject<string>('');

  onSearchUpdated(searchQuery: string) {
    this.searchQuery$.next(searchQuery);
  }

}
