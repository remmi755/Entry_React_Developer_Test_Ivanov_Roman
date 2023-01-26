import { createSlice } from "@reduxjs/toolkit";

import {getCartFromLS} from "./getCartFromLs";

const initialState = {
  cartList: getCartFromLS(),
  count: 1,
};

export const cartListSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    setCartList: (state, action) => {
      state.cartList =  action.payload;
    },

    countIncrease: (state, action) => {
      const newProductChanged = { ...action.payload, count: action.payload.count + 1};

      state.cartList.forEach((el, index) => {
        if (el.activeAttributeItem.id === action.payload.activeAttributeItem.id) {
          state.cartList[index] = newProductChanged;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cartList));
    },

    countDecrease: (state, action) => {
      if(action.payload.count - 1 > 0) {
        const newProductChanged = { ...action.payload, count: action.payload.count - 1}
        state.cartList.forEach((el, index) => {
          if (el.activeAttributeItem.id === action.payload.activeAttributeItem.id) {
            state.cartList[index] = newProductChanged;
          }
        });
        localStorage.setItem("cart", JSON.stringify(state.cartList));
      } else {
        state.cartList = state.cartList.filter((item) => item.activeAttributeItem.id !== action.payload.activeAttributeItem.id)
        localStorage.setItem("cart", JSON.stringify(state.cartList))
      };
    },
  },
});

export const { setCartList, countDecrease, countIncrease } = cartListSlice.actions;

export default cartListSlice.reducer;
