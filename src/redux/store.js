import { configureStore } from '@reduxjs/toolkit';
import userReducer from './states/user.state';
import departmentReducer from './states/departments.state';
import employeesReducer from './states/employees.state';
export default configureStore({
  reducer: {
    user: userReducer,
    department: departmentReducer,
    employees: employeesReducer,
  },
})