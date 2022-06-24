import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Counter} from './interfaces';

const initialState: Counter = {
  value: 0,
};


const counter = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },

    reset(state) {
      state.value = initialState.value;
    },
  },

});

export const counterActions = counter.actions;
export default counter.reducer;
