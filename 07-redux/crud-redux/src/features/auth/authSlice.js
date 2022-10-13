import { createSlice } from '@reduxjs/toolkit'

const KEY = 'auth'
const initialState = window.localStorage.getItem(KEY) || false

const saveLocalStorage = (data) => localStorage.setItem(KEY, data)
const deleteLocalStorage = () => window.localStorage.clear()

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    toogleLogin: (isAuth) => {
      isAuth ? deleteLocalStorage() : saveLocalStorage(!isAuth)
      return !isAuth
    },
  },
})

export const { toogleLogin } = authSlice.actions
export default authSlice.reducer
