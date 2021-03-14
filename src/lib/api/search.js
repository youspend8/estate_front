import axios from '../defaultClient';

export const fetchSearchIndices = ({ payload }) => (
  axios.get(`/search/assist/${payload}`)
);