import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const counterFeatureSelector = createFeatureSelector<CounterState>("count");

export const countSelector = createSelector(counterFeatureSelector, (state: CounterState) => {
    return state.count;
});