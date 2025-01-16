import { combineReducers } from '@reduxjs/toolkit';
import { AddressReducer } from './AddressReducer'
import pickupReducer from './PickupReducer';

const rootReducer = combineReducers({
  address: AddressReducer,
  pickup: pickupReducer
});

export default rootReducer;
