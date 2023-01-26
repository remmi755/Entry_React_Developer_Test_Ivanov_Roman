import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchProductItem } from "../fetchProduct";

export const fetchAttributes = createAsyncThunk(
  "attributes/fetchByStatus",
  async (cardId) => {
    const { data } = await fetchProductItem(cardId);
    return data.product.attributes;
  }
);

const initialState = {
  status: "loading",
  attributes: [fetchAttributes],
  activeAttributeItem: "",
  activeAttributeIndex: "",
  activeAttribute: "",
};

export const attributesSlice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    setActiveAttributeItem: (state, action) => {
      state.activeAttributeItem = action.payload;
    },

    setActiveAttributeIndex: (state, action) => {
      state.activeAttributeIndex = action.payload;
    },

    setActiveAttribute: (state, action) => {
      state.activeAttribute = action.payload;
    },

    setAttributes: (state, action) => {
      state.activeAttribute = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAttributes.pending, (state) => {
      state.status = 'loading'

    })
    builder.addCase(fetchAttributes.fulfilled, (state, action) => {
      state.attributes = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchAttributes.rejected, (state) => {
      state.status = 'error'
    })
  },
});

export const { setActiveAttributeItem, setActiveAttributeIndex, setActiveAttribute, setAttributes } = attributesSlice.actions;

export default attributesSlice.reducer;