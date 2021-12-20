import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementAction, incrementAction, resetAction } from '../counter.action';
import { CounterState } from '../counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store:Store<CounterState>) { }

  ngOnInit(): void {
  }

  increment(){
    this.store.dispatch(incrementAction());
  }

  decrement(){
    this.store.dispatch(decrementAction());
  }

  reset(){
    this.store.dispatch(resetAction());
  }

}
