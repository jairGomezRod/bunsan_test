import { createSlice } from '@reduxjs/toolkit';

const defaultEmployees = {
  1: {
    name: "Manager",
    allocation: 300
  },
  2:{
    name: "QA Tester",
    allocation: 500
  },
  3:{
    name: "Developer",
    allocation: 1000
  }
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: [defaultEmployees],
})

export default employeesSlice.reducer;