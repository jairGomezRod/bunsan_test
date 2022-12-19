import { configureStore } from '@reduxjs/toolkit';
import userReducer from './states/user.state';
import departmentReducer from './states/departments.state';
import employeesReducer from './states/employees.state';
import secondLevelReducer from './states/eSecondLevel.state';
import thirdLevelReducer from './states/eThirdLevel.state';
export default configureStore({
  reducer: {
    user: userReducer,
    department: departmentReducer,
    employees: employeesReducer,
    secondLevel: secondLevelReducer,
    thirdLevel: thirdLevelReducer,
  },
})