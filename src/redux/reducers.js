import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'sepet',
  initialState: {
    sepet: [],
    done: [],
    sum: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.sum = 0;
      state.sepet = [...state.sepet, action.payload];
      state.sepet.map(item => {
        state.sum = parseInt(item.adet) * parseInt(item.fiyat) + state.sum;
      });
    },
    plus: (state, action) => {
      state.sum = 0;
      state.sepet[action.payload].adet = state.sepet[action.payload].adet + 1;
      state.sepet.map(item => {
        state.sum = parseInt(item.adet) * parseInt(item.fiyat) + state.sum;
      });
    },
    minus: (state, action) => {
      state.sum = 0;
      state.sepet[action.payload].adet = state.sepet[action.payload].adet - 1;
      state.sepet.map(item => {
        state.sum = parseInt(item.adet) * parseInt(item.fiyat) + state.sum;
      });

      state.sepet[action.payload].adet == 0
        ? state.sepet.splice(action.payload, 1)
        : null;
    },
    done: state => {
      state.done = [...state.done, state.sepet];
      state.sum = 0;
      state.sepet.map(item => {
        state.sum = parseInt(item.adet) * parseInt(item.fiyat) + state.sum;
      });
    },
    delete_all: state => {
      state.sepet.splice(0, state.sepet.length);
      state.sum = 0;
      state.sepet.map(item => {
        state.sum = parseInt(item.adet) * parseInt(item.fiyat) + state.sum;
      });
    },
    reduction: state => {
      state.sum = 0;
      state.sepet.map(item => {
        state.sum = parseInt(item.adet) * parseInt(item.fiyat) + state.sum;
      });
      for (let i = 0; i < state.sepet.length; i++) {
        for (let k = i + 1; k < state.sepet.length; k++) {
          if (state.sepet[i].ad == state.sepet[k].ad) {
            state.sepet[i].adet += state.sepet[k].adet;
            state.sepet.splice(k, 1);
          }
        }
      }
    },
    sum: state => {
      state.sepet.map(item => {
        state.sum = parseInt(item.adet) * parseInt(item.fiyat) + state.sum;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  plus,
  minus,
  incrementByAmount,
  done,
  delete_all,
  reduction,
  sum,
} = counterSlice.actions;
export default counterSlice.reducer;
