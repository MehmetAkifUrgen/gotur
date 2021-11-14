// import state from './store';
// function reducers(state, action, index) {
//   switch (action.type) {
//     // case 'update_counter':
//     //   return {...state, counter: state.counter + 1};
//     case 'down_counter':
//       return {
//         ...state,
//         arr: [...state.arr, action.newItem],
//       };

//     default:
//       return state;
//   }
// }
// export default reducers;
import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'sepet',
  initialState: {
    arr: [],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.arr = [...state.arr, action.payload];
    },
    plus: (state, action) => {
      state.arr[action.payload].adet = state.arr[action.payload].adet + 1;
    },
    minus: (state, action) => {
      state.arr[action.payload].adet = state.arr[action.payload].adet - 1;

      state.arr[action.payload].adet == 0
        ? state.arr.splice(action.payload, 1)
        : null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {plus, minus, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
