import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  initialState: true,
  name: 'auth',
  reducers: {
    toogleLogin: (state) => !state,
  },
})

export default authSlice.reducer
