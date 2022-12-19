import { createSlice } from '@reduxjs/toolkit';

const defaultSecondLevel = (state, payload) => {
  let id = `s${state.length + 1}`;
  const obj = {
    id,
    type: payload.type,
    dad: payload.dad 
  };

  return obj;
}

export const secondLevelSlice = createSlice({
  name: 'secondLevel',
  initialState: [defaultSecondLevel([],{})],
  reducers: {
    newSecondEmployee: (state,action) => {
      state.push(defaultSecondLevel(state,action.payload));
    },
    deleteSecondEmployee: (state, action) => {
      return state.filter((item) => item.id != action.payload)
    },
  },
})

export const { newSecondEmployee, deleteSecondEmployee, updateSecondEmployee } = secondLevelSlice.actions

export default secondLevelSlice.reducer;