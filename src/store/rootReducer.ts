import { combineReducers } from '@reduxjs/toolkit';
import users from './users/reducer';
import counter from './counter/reducer';

const rootReducer = combineReducers({
  users,
  counter,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
