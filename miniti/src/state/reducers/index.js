import { combineReducers } from '@reduxjs/toolkit';
import { AddressReducer } from './AddressReducer'

const rootReducer = combineReducers({
  address: AddressReducer,
});

export default rootReducer;
