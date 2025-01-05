import { services } from "../../Api";
import AddressActionTypes from "../actionTypes/Address.actionTypes";
  
export const getAddress = () => async (dispatch) => {
    try {
      const addresses = await services.AddressApi.api.getAddressData();
      dispatch({
        type: AddressActionTypes.GET_ADDRESS,
        payload: addresses
      });
      return addresses;
    } catch (error) {
      console.error('Failed to fetch addresses:', error);
      return [];
    }
  };
  