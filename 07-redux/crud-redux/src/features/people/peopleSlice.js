import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const findPerson = (people, id) => people.find((person) => person.id === id)

const peopleSlice = createSlice({
  initialState,
  name: 'people',
  reducers: {
    readAllPeople: (people, action) => action.payload,
    deletePerson: (people, action) => people.filter(person => person.id !== action.payload),
    resetPeople: () => initialState,
  },
})

export const { readAllPeople, resetPeople, deletePerson } = peopleSlice.actions
export default peopleSlice.reducer
