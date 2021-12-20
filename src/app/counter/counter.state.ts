import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

export interface CounterState {
    count:number
}

export const initialCounterState :CounterState = {
    count:0
}

