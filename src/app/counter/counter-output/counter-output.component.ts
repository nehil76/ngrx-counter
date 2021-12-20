import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../counter.state';
import *  as COUNTER_SELECTOR from '../counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
 // counter$ : Observable<CounterState>;
  count:number=0;
  constructor(private store: Store<{count:CounterState}>) {
    this.store.select(COUNTER_SELECTOR.countSelector).subscribe((data)=>{
      this.count=data;
    });
    //this.counter$ = store.select("count");
   }

  ngOnInit(): void {
  }

}
