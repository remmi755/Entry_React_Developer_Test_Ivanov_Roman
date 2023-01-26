import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import currencies from '../currencies/slice'
import categories from "../categories/slice";
import cartList from '../cartList/slice'
import pdp from '../pdp/slice'
import modal from '../modal/slice'
import attributes from "../attributes/slice";

export const store = configureStore({
  reducer: {
    attributes,
    currencies,
    categories,
    cartList,
    pdp,
    modal,
  },
  middleware: [thunk],
})


