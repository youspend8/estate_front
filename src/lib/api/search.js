import axios from '../staticDefaultClient';

export const fetchSearchName = () => (
  axios.get('/json/search_name.json')
);

export const fetchSearchAddress = () => (
  axios.get('/json/search_address.json')
);