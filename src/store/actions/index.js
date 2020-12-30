export const TRADE_AGGREGATE = 'trade/TRADE_AGGREGATE';
export const TRADE_SEARCH = 'trade/TRADE_SEARCH'
export const TRADE_STATS = 'trade/TRADE_STATS';
export const TRADE_STATS_PERIOD = 'trade/TRADE_STATS_PERIOD';
export const ON_SUCCESS = 'ON_SUCCESS';
export const ON_FAIL = 'ON_FAIL';

export const tradeAggregate = query => ({
  type: TRADE_AGGREGATE,
  query
});

export const tradeSearch = query => ({
  type: TRADE_SEARCH,
  query
});

export const tradeStats = query => ({
  type: TRADE_STATS,
  query
});

export const tradeStatsPeriod = query => ({
  type: TRADE_STATS_PERIOD,
  query
});

export const onSuccess = data => ({
  type: ON_SUCCESS,
  data
});

export const onFail = () => ({
  type: ON_FAIL
});