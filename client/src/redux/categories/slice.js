import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchCategories } from "../fetchCategories";

export const fetchProductCards = createAsyncThunk(
  "categories/fetchByStatus",
  async () => {
    const { data } = await fetchCategories();
    return data.categories;
  }
);

const initialState = {
  status: "loading",
  productCards: [fetchProductCards],
  activeCategory: 0,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setProductCards: (state, action) => {
      state.productCards = action.payload;
    },

    onSelectCategories: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductCards.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchProductCards.fulfilled, (state, action) => {
      state.productCards = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchProductCards.rejected, (state) => {
      state.status = 'error'
      state.productCards = []
    })
  },
});

export const { setProductCards, onSelectCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;