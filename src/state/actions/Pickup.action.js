import { services } from "../../Api";
import PickupActionTypes from "../actionTypes/Pickup.actionTypes";

export const createPickup = (pickupData) => {
  return async (dispatch) => {
    try {
      const pickups = await services.PickupApi.api.createPickupRequest(pickupData);
      dispatch({
        type: PickupActionTypes.POST_PICKUP,
        payload: pickups,
      });
    } catch (error) {
      console.error("Failed to post pickup:", error);
      return [];
    }
  };
};

export const getAllPickup = () => {
  return async (dispatch) => {
    try {
      const pickups = await services.PickupApi.api.GetallPickupRequest();
      dispatch({
        type: PickupActionTypes.GET_PICKUP,
        payload: pickups,
      });
    } catch (error) {
      console.error("Failed to get pickup:", error);
      return [];
    }
  };
};