import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: undefined,
};
const orderSlice = createSlice({
  name: 'AllOrders',
  initialState,
  reducers: {
    allOrderSaved: (state, action) => {
      state.orders = action.payload.orders;
    },
  },
});

export const { allOrderSaved } = orderSlice.actions;
export default orderSlice.reducer;
