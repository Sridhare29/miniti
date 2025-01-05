import AddressActionTypes from "../actionTypes/Address.actionTypes";

const initialState = {
  addresses: []
};

export const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddressActionTypes.GET_ADDRESS:
      return {
        ...state,
        addresses: action.payload
      };
    default:
      return state;
  }
};
