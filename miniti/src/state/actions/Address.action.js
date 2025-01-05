import { services } from "../../Api";
import AddressActionTypes from "../actionTypes/Address.actionTypes";
  
  export function getAddress() {
    return async (dispatch) => {
      let Address = [];
      try {
        Address = await services.AddressApi.api.getAddressData({
          throwTheErr: false,
        });
        dispatch({ type: AddressActionTypes.GET_ADDRESS, Address });
      } catch (error) {
        handleError({
          error,
          origin: FILE_PATH,
        });
        return [];
      }
    };
  }