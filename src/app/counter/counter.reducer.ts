
import { Action, createReducer, on } from "@ngrx/store";
import { customIncrement, decrementAction, incrementAction, resetAction } from "./counter.action";
import { initialCounterState } from "./counter.state";

const _counterReducer = createReducer(initialCounterState,
    on(incrementAction, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrementAction,(state)=>{
        return {
            ...state,
            counter: state.counter-1
        }
    }),
    on(resetAction,(state)=>{
        return {
            ...state,
            counter:0
        }
    }),
    on(customIncrement,(state,action) =>{
        return {
            ...state,
            counter:state.counter+action.value
        }
    })
);

export function counterReduccer(state:any,action:Action){
    return _counterReducer(state,action);
}