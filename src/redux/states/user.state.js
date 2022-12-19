import { createSlice } from '@reduxjs/toolkit'

const defaultUser = {
  name: "Jhon Doe",
  rol: "Manager",
  email: "jhon.doe@bunsan.io",
  password: "jh0nD0eBunsan"
};

export const userSlice = createSlice({
  name: 'user',
  initialState: [defaultUser],
})

export default userSlice.reducer;