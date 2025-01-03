import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface TCounterState {
    value : number;
}

const initialState : TCounterState = {
    value : 0
};

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state, action : PayloadAction<number>) => {
            state.value += action.payload  
        },
        decrement : (state) => {
            state.value -= 1
        }
    }
})


export const {increment, decrement} = counterSlice.actions

export const selectCount = (state : RootState) => state.counter.value

export default counterSlice.reducer