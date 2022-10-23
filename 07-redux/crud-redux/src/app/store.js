import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { peopleSlice, authSlice } from '@/features'

const store = configureStore({
  reducer: {
    auth: authSlice,
    people: peopleSlice,
  },
})

/** getStates */
export const useAuthState = () => useSelector((store) => store.auth)
export const usePeopleState = () => useSelector((store) => store.people)

export default store
