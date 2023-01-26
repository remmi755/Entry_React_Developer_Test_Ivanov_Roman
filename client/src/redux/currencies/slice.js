import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCurrency: 0,
  selectedCurrency: "$",
  openPopup: false,
  currencies: [],
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    onSelectCurrencies: (state, action) => {
      state.activeCurrency = action.payload;
      state.selectedCurrency = state.currencies[action.payload].currency.symbol;
      state.openPopup = false
    },

    onOpenPopup: (state) => {
      state.openPopup = !state.openPopup;
    },

    onClosePopup: (state, action) => {
      state.openPopup = action.payload;
    },

    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
  },
});

export const { setCurrencies,onSelectCurrencies, onOpenPopup, onClosePopup } = currenciesSlice.actions;

export default currenciesSlice.reducer;
