import PickupActionTypes from '../actionTypes/Pickup.actionTypes';

const initialState = {
  fetchedPickups: [], // stores response from GET_PICKUP
  postedPickups: [], // stores pickups added via POST_PICKUP
  loading: false,
  error: null,
};

const pickupReducer = (state = initialState, action) => {
  switch (action.type) {
    case PickupActionTypes.GET_PICKUP:
      return {
        ...state,
        fetchedPickups: action.payload,
        loading: false,
        error: null,
      };

    case PickupActionTypes.POST_PICKUP:
      return {
        ...state,
        postedPickups: [...state.postedPickups, action.payload],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default pickupReducer;
