import { handleActions } from "redux-actions";
import { ON_FAIL_SEARCH_ADDRESS_JSON, ON_FAIL_SEARCH_NAME_JSON, ON_SUCCESS_SEARCH_ADDRESS_JSON, ON_SUCCESS_SEARCH_NAME_JSON, SEARCH_ADDRESS_JSON, SEARCH_NAME_JSON } from "../actions/search";

const initialState = {
  searchAddress: {},
  searchName: {},
};

export default handleActions({
  [SEARCH_ADDRESS_JSON]: (state, action) => {
    return {
      ...state,
    }
  },
  [ON_SUCCESS_SEARCH_ADDRESS_JSON]: (state, { data }) => {
    return {
      ...state,
      searchAddress: data
    }
  },
  [ON_FAIL_SEARCH_ADDRESS_JSON]: (state, action) => {
    return {
      ...state,
    }
  },
  [SEARCH_NAME_JSON]: (state, action) => {
    return {
      ...state,
    }
  },
  [ON_SUCCESS_SEARCH_NAME_JSON]: (state, { data }) => {
    return {
      ...state,
      searchName: data
    }
  },
  [ON_FAIL_SEARCH_NAME_JSON]: (state, action) => {
    return {
      ...state,
    }
  }
}, initialState);