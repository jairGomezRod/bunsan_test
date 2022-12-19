import { createSlice } from '@reduxjs/toolkit';

const defaultDepartments = (state) => {
  let id = state.length + 1;
  const obj = {
    id,
    name: `Department ${id}`,
    allocation: 300,
    eManager:1,
    eQaTester:0,
    eDeveloper:0,
    employees:[
      {
        type:1,
        childrens:[
          {
            type:1,
            childrens:[
              2,
              1,
              3
            ]
          },
          {
            type: 2
          },
          {
            type: 1,
          }
        ]
      }
    ]
  };

  return obj;
}

export const departmentSlice = createSlice({
  name: 'department',
  initialState: [defaultDepartments([])],
  reducers: {
    newDepartment: (state) => {
      state.push(defaultDepartments(state));
    },
    newSecondLevel: (state) => {
      state.value -= 1
    },
    newThirdLevel: (state, action) => {
      state.value += action.payload
    },

  },
})

export const { newDepartment, newSecondLevel, newThirdLevel } = departmentSlice.actions

export default departmentSlice.reducer;