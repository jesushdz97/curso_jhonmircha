import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const peopleSlice = createSlice({
  initialState,
  name: 'people',
  reducers: {
    readAllPeople: (state, action) => action.payload,
    resetPeople: () => initialState,
  },
})

export const { readAllPeople, resetPeople } = peopleSlice.actions
export default peopleSlice.reducer
