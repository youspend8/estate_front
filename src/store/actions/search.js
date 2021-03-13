export const SEARCH_ADDRESS_JSON = "search/ADDRESS_JSON";
export const ON_SUCCESS_SEARCH_ADDRESS_JSON = "search/ON_SUCCESS_ADDRESS_JSON";
export const ON_FAIL_SEARCH_ADDRESS_JSON = "search/ON_FAIL_ADDRESS_JSON";
export const SEARCH_NAME_JSON = "search/NAME_JSON";
export const ON_SUCCESS_SEARCH_NAME_JSON = "search/ON_SUCCESS_NAME_JSON";
export const ON_FAIL_SEARCH_NAME_JSON = "search/ON_FAIL_NAME_JSON";

export const actionSearchAddressJson = payload => ({
  type: SEARCH_ADDRESS_JSON,
  payload
});

export const actionSearchNameJson = payload => ({
  type: SEARCH_NAME_JSON,
  payload
})

export const onSuccessAddressJson = payload => ({
  type: ON_SUCCESS_SEARCH_ADDRESS_JSON,
  payload
});

export const onFailAddressJson = () => ({
  type: ON_FAIL_SEARCH_ADDRESS_JSON
});

export const onSuccessNameJson = payload => ({
  type: ON_SUCCESS_SEARCH_NAME_JSON,
  payload
});

export const onFailNameJson = () => ({
  type: ON_FAIL_SEARCH_NAME_JSON
});