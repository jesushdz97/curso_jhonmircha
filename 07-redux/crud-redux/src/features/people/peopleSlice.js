import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  people: [],
  dataToEdit: null,
}

const findPerson = (people, id) => people.find((person) => person.id === id)

const peopleSlice = createSlice({
  initialState,
  name: 'people',
  reducers: {
    readAllPeople: (state, action) => {
      state.people = action.payload
      return state
    },
    setToEdit: (state, action) => {
      state.dataToEdit = action.payload
      return state
    },
    clearDataToEdit: (state) => {
      state.dataToEdit = null
      return state
    },

    createPerson: (state, action) => {},
    editPerson: (state, action) => {},
    deletePerson: (state, action) => {
      let people = state.people
      let selectedPerson = findPerson(state.people, action.payload)
      people.splice(people.indexOf(selectedPerson), 1)
    },
    resetPeople: () => initialState,
  },
})

export const {
  readAllPeople,
  resetPeople,
  deletePerson,
  setToEdit,
  createPerson,
  editPerson,
  clearDataToEdit,
} = peopleSlice.actions

export default peopleSlice.reducer
