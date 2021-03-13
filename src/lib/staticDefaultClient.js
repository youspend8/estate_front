import axios from 'axios';

const baseURL = (() => {
  const domain = 'https://www.chaehoon.kr';
  return `${domain}`;
})();

const defaultClient = axios.create({
  baseURL: baseURL
});

export default defaultClient;