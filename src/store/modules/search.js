import { handleActions } from "redux-actions";
import { SEARCH_INDICES_JSON, ON_SUCCESS_SEARCH_INDICES_JSON, ON_FAIL_SEARCH_INDICES_JSON } from "../actions/search";

const initialState = {
  indices: {}
};

export default handleActions({
  [SEARCH_INDICES_JSON]: (state, { payload }) => {
    return {
      ...state,
      payload
    }
  },
  [ON_SUCCESS_SEARCH_INDICES_JSON]: (state, { payload }) => {
    return {
      ...state,
      indices: payload.data
    }
  },
  [ON_FAIL_SEARCH_INDICES_JSON]: (state, { payload }) => {
    return {
      ...state,
    }
  }
}, initialState);