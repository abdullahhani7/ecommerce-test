import type { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
  items: { [key: number]: number };
  productsFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

const getCartTotalQuantity = (state) => {
  console.log("function");

  const totalQuantity = Object.values(state.cart.items).reduce(
    (acc, current) => acc + current,
    0
  );
  return totalQuantity;
};

export { getCartTotalQuantity };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
