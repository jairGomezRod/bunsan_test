import { createSlice } from '@reduxjs/toolkit';

const defaultThirdLevel = (state, payload) => {
  let id = `t${state.length + 1}`;
  const obj = {
    id,
    type: payload.type,
    dad: payload.dad
  };

  return obj;
}

export const thirdLevelSlice = createSlice({
  name: 'thirdLevel',
  initialState: [defaultThirdLevel([],{})],
  reducers: {
    newThirdEmployee: (state, action) => {
      state.push(defaultThirdLevel(state, action.payload));
    },
    deleteThirdEmployee: (state, action) => {
      return state.filter((item) => item.id != action.payload)
    },

  },
})

export const { newThirdEmployee, deleteThirdEmployee, updateThirdEmployee } = thirdLevelSlice.actions

export default thirdLevelSlice.reducer;