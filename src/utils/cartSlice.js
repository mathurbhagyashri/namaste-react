import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // --- vanilla (older) REDUX => DON'T MUTATE STATE,returning was mandatory
      // const newState= [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux toolKit ( mutating state here)==>Uses immer Library BTS =>
      // we HAVE to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    //originalState= {items: ['pizza']}
    clearCart: (state) => {
      // RTK - either mutate existing state or return new state
      // state.items.length = 0; //originalState=[]
      return { items: [] }; // this new object will be replaced inside originalState = []
    },
  },
});

export const {addItem,removeItem,clearCart}= cartSlice.actions;

export default cartSlice.reducer; 