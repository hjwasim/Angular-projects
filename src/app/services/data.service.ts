import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // seed data
  private seed: string[] = [
    'Chennai',
    'Madurai',
    'Trichy',
    'Thanjavur',
    'Salem',
    'Theni',
    'Muthupet',
    'Chidambaram',
    'Cuddalore',
  ];
  private data$ = new BehaviorSubject(this.seed);

  //expose as observable
  data = this.data$.asObservable();

  // enable adding, and emitting fresh dataset
  addData(x: string) {
  }

}
