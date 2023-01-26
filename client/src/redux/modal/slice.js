import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShow: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.modalShow = !state.modalShow;
    },

    setModalShow: (state, action) => {
      state.modalShow = action.payload;
    },
  },
});

export const { toggleModal, setModalShow } = modalSlice.actions;

export default modalSlice.reducer;