import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { peopleSlice, authSlice, modalSlice } from '@/features'

const store = configureStore({
  reducer: {
    auth: authSlice,
    people: peopleSlice,
    modal: modalSlice,
  },
})

/** getStates */
export const useAuthState = () => useSelector((store) => store.auth)
export const usePeopleState = () => useSelector((store) => store.people)
export const useModalState = () => useSelector((store) => store.modal)

export default store
