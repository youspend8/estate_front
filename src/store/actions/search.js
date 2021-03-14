export const SEARCH_INDICES_JSON = "search/INDICES_JSON";
export const ON_SUCCESS_SEARCH_INDICES_JSON = "search/ON_SUCCESS_INDICES_JSON";
export const ON_FAIL_SEARCH_INDICES_JSON = "search/ON_FAIL_INDICES_JSON";

export const actionSearchIndicesJson = payload => ({
  type: SEARCH_INDICES_JSON,
  payload
})

export const onSuccessIndicesJson = payload => ({
  type: ON_SUCCESS_SEARCH_INDICES_JSON,
  payload
});

export const onFailIndicesJson = () => ({
  type: ON_FAIL_SEARCH_INDICES_JSON
});