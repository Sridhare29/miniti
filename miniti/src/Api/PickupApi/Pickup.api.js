import apiSpecifications from "../@constants/apiSpecifications";
import apiFactory from "../@factories/api.factory";
import http from "../@utilities/http";

export default apiFactory({
  async createPickupRequest() {
    try {
      const url = `${BASE_URL}/${apiSpecifications.pickup.key}/${apiSpecifications.pickup.service}`;
      const response = await http.post(url, data);
      return response.data;
    } catch {
      if (error.response) {
        // Server responded with a status other than 2xx
        throw new Error(`Server error: ${error.response.statusText}`);
      } else if (error.request) {
        // Request was made, but no response was received
        throw new Error("Network error: No response received");
      } else {
        // Other errors (e.g., setup issues)
        throw new Error(`Unexpected error: ${error.message}`);
      }
    }
  },
});
