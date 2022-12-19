import { createSlice } from '@reduxjs/toolkit';

const defaultDepartments = (state) => {
  let id = state.length + 1;
  const obj = {
    id: `d${id}`,
    name: `Department ${id}`,
    allocation: 300,
    eManager:1,
    eQaTester:0,
    eDeveloper:0,
    type:1
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
    updateEmployeesDepartment: (state, action) => {
      
      
      let pos = state.map(item => item.id).indexOf(action.payload.id);

      state[pos].allocation = state[pos].allocation + action.payload.expense.allocation;
      
      switch(action.payload.type){
        case 1:
          state[pos]["eManager"]++;
          break;
        case 2:
          state[pos]["eQaTester"]++;
          break;
        case 3:
          state[pos]["eDeveloper"]++;
          break;
        default:
          console.log("error");
      }
      
    },

  },
})

export const { newDepartment, updateEmployeesDepartment } = departmentSlice.actions

export default departmentSlice.reducer;