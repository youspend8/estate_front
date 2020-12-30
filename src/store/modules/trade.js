import { handleActions } from 'redux-actions';
import { TRADE_AGGREGATE , ON_SUCCESS, ON_FAIL, TRADE_SEARCH, TRADE_STATS_PERIOD, TRADE_STATS } from '../actions'

const initialState = {
  tradeAggs: {},
  tradeSearch: {},
  tradeStats: {},
  tradeStatsPeriod: {}
};

const reducer = handleActions(
  {
    [TRADE_AGGREGATE]: (state, action) => {
      return {
        ...state,
      }
    },
    [TRADE_SEARCH]: (state, action) => {
      return {
        ...state,
      }
    },
    [TRADE_STATS]: (state, action) => {
      return {
        ...state,
      }
    },
    [TRADE_STATS_PERIOD]: (state, action) => {
      return {
        ...state,
      }
    },
    [ON_SUCCESS]: (state, { data }) => {
      const { invoke, result } = data;
      switch (invoke) {
        case TRADE_AGGREGATE:
          return {
            ...state,
            tradeAggs: result
          };
        case TRADE_SEARCH: 
          return {
            ...state,
            tradeSearch: result
          };
        case TRADE_STATS: 
          return {
            ...state,
            tradeStats: result
          };
        case TRADE_STATS_PERIOD: 
          return {
            ...state,
            tradeStatsPeriod: result
          };
      }
    },
    [ON_FAIL]: (state, { data }) => ({
      ...state,
    })
  }, initialState
)

export default reducer;