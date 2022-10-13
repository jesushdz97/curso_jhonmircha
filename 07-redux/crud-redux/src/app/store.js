import { configureStore } from '@reduxjs/toolkit'
import authSlice from '@/features/auth/authSlice'
import { useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

/** getStates */
export const useAuthState = () => useSelector((store) => store.auth)

export default store
