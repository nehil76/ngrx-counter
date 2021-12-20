import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../counter.action';
import * as COUNTER_ACTION from '../counter.action';
import { CounterState } from '../counter.state';

@Component({
  selector: 'app-custom-increment-counter',
  templateUrl: './custom-increment-counter.component.html',
  styleUrls: ['./custom-increment-counter.component.css']
})
export class CustomIncrementCounterComponent implements OnInit {
  value: number = 0;
  constructor(private store: Store<{ count: CounterState }>) { }

  ngOnInit(): void {
  }

  addToCounter() {
    this.store.dispatch(COUNTER_ACTION.customIncrement({ value: this.value }));
  }

}
