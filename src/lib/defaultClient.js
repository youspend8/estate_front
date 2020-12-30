import axios from 'axios';

const baseURL = (() => {
  // const domain = 'https://www.chaehoon.kr';
  const domain = 'http://192.168.0.14:8000';

  return `${domain}/estate/api/v1`;
})();

const defaultClient = axios.create({
  baseURL: baseURL
})

export default defaultClient;