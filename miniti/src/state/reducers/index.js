import addressReducer from "./AddressReducer";
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  address: addressReducer, // Ensure the key matches what your component expects
});

export default rootReducer;
