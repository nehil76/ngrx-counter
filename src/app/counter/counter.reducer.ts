
import { Action, createReducer, on } from "@ngrx/store";
import { customIncrement, decrementAction, incrementAction, resetAction } from "./counter.action";
import { initialCounterState } from "./counter.state";

const _counterReducer = createReducer(initialCounterState,
    on(incrementAction, (state) => {
        return {
            ...state,
            count: state.count + 1
        }
    }),
    on(decrementAction,(state)=>{
        return {
            ...state,
            count: state.count-1
        }
    }),
    on(resetAction,(state)=>{
        return {
            ...state,
            count:0
        }
    }),
    on(customIncrement,(state,action) =>{
        return {
            ...state,
            count:state.count+action.value
        }
    })
);

export function counterReduccer(state:any,action:Action){
    return _counterReducer(state,action);
}