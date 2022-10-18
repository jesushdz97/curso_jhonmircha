import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const findPerson = (people, id) => people.find((person) => person.id === id)

const peopleSlice = createSlice({
  initialState,
  name: 'people',
  reducers: {
    readAllPeople: (people, action) => action.payload,
    createPerson: (people, action) => {},
    editPerson: (state, action) => {},
    deletePerson: (people, action) => {
      let selectedPerson = findPerson(people, action.payload)
      people.splice(people.indexOf(selectedPerson), 1)
    },
    resetPeople: () => initialState,
  },
})

export const { readAllPeople, resetPeople, deletePerson } = peopleSlice.actions
export default peopleSlice.reducer
