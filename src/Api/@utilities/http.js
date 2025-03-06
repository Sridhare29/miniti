import axios from 'axios';

const http = axios.create({
  baseURL: '',  // You can dynamically update baseURL or set for individual calls
  timeout: 10000,  // Optional timeout configuration
});

export default http;
