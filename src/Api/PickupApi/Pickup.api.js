import apiSpecifications from "../@constants/apiSpecifications";
import apiFactory from "../@factories/api.factory";
import http from "../@utilities/http";
import BASE_URL from "../@constants/baseUrl";

export default apiFactory({
  async createPickupRequest(requestData) {
    try {
      const url = `${BASE_URL}/${apiSpecifications.pickup.version}/${apiSpecifications.pickup.key}/${apiSpecifications.pickup.service}`;
      const response = await http.post(url, requestData);
      return response.status;
    } catch (error) {
      throw error;
    }
  },
  async GetallPickupRequest() {
    try {
      const url = `${BASE_URL}/${apiSpecifications.pickup.version}/${apiSpecifications.pickup.key}`;
      const response = await http.get(url);
      return response.status;
    } catch (error) {
      throw error;
    }
  },
});
