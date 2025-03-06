import PickupActionTypes from "../actionTypes/Pickup.actionTypes";

const initialState = {
  pickups: [],
  loading: false,
  error: null,
};

const pickupReducer = (state = initialState, action) => {
  switch (action.type) {
    case PickupActionTypes.POST_PICKUP:
      return {
        ...state,
        loading: false,
        pickups: [...state.pickups, action.payload],
      };
    default:
      return state;
  }
};

export default pickupReducer;
