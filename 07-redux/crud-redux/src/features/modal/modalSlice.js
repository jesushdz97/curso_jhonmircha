import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  message: null,
}

const modalSlice = createSlice({
  initialState,
  name: 'modal',
  reducers: {
    openModal: (state, action) => {
      state.show = true
      state.message = action.payload
      return state
    },
    closeModal: () => initialState,
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
