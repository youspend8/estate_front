import axios from '../defaultClient';

export const fetchTradeAggregate = query => axios.get('/trade/aggregate', {
  params: query
});

export const fetchTradeSearch = query => axios.get('/trade/search', {
  params: query
});

export const fetchTradeStats = query => axios.get('/trade/stats', {
  params: query
});

export const fetchTradeStatsPeriod = query => axios.get('/trade/stats/period', {
  params: query
});
