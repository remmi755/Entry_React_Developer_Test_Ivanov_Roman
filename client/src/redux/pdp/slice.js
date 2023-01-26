import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchProductItem } from "../fetchProduct";

export const fetchProduct = createAsyncThunk(
  "pdp/fetchByStatus",
  async (cardId) => {
    const { data } = await fetchProductItem(cardId);
    return data.product;
  }
);

const initialState = {
  status: "loading",
  product: [fetchProduct],
  currentImgId: 0,
  price: 0,
  symbol: ''
};

export const pdpSlice = createSlice({
  name: "pdp",
  initialState,
  reducers: {
    onChangeImage: (state, action) => {
      state.currentImgId = action.payload;
    },

    setPrices: (state, action) => {
      state.price = action.payload;
    },

    setSymbol: (state, action) => {
      state.symbol = action.payload;
    },

    setProduct: (state, action) => {
      state.symbol = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = 'loading'

    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchProduct.rejected, (state) => {
      state.status = 'error'
    })
  },
});

export const { onChangeImage, setPrices, setSymbol, setProduct } = pdpSlice.actions;

export default pdpSlice.reducer;

