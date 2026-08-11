import apiSpecifications from '../@constants/apiSpecifications';
import apiFactory from '../@factories/api.factory';
import http from '../@utilities/http';

export default apiFactory({
  async getAddressData() {
    try {
      const url = `${apiSpecifications.address.version}/${apiSpecifications.address.key}`;
      const response = await http.get(url);
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch addresses';
      throw new Error(errorMessage);
    }
  }
});
