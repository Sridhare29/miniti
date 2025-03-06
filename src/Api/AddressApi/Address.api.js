import apiSpecifications from '../@constants/apiSpecifications';
import BASE_URL from '../@constants/baseUrl';
import apiFactory from '../@factories/api.factory'
import http from '../@utilities/http';


export default apiFactory({
  async getAddressData() {
    try {
      const url = `${BASE_URL}/${apiSpecifications.address.version}/${apiSpecifications.address.key}`;
      const response = await http.get(url);
      return response.data;
    } catch (error) {
      // More specific error handling
      const errorMessage = error.response?.data?.message || 'Failed to fetch addresses';
      throw new Error(errorMessage);
    }
  }
});
