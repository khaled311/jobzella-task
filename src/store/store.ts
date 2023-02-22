import { createSlice, configureStore } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "counter",
  initialState: {
    isOpen: false,
    modal: "",
  },
  reducers: {
    openModal: (state, modalName) => {
      state.isOpen = true;
      state.modal = modalName.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modal = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const store = configureStore({
  reducer: modalSlice.reducer,
});
