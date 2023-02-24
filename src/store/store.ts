import { createSlice, configureStore } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "counter",
  initialState: {
    isOpen: false,
    modal: "",
    status: "",
  },
  reducers: {
    openModal: (state, modalName) => {
      state.isOpen = true;
      state.modal = modalName.payload;
    },
    changeTaskStatus: (state, taskStatus: TTaskStatus) => {
      state.status = taskStatus.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modal = "";
      state.status = "";
    },
  },
});

export const { openModal, changeTaskStatus, closeModal } = modalSlice.actions;

export const store = configureStore({
  reducer: modalSlice.reducer,
});
