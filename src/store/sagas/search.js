import * as SearchAPI from "../../lib/api/search";
import { onFailAddressJson, onFailNameJson, onSuccessAddressJson, onSuccessNameJson, SEARCH_ADDRESS_JSON, SEARCH_NAME_JSON } from "../actions/search";

function* searchAddressJson(payload) {
  const { data } = yield SearchAPI.fetchSearchAddress(payload);
  try {
      yield put(onSuccessAddressJson({ result: data }));
  } catch (error) {
      yield put(onFailAddressJson(data))
  }
}

function* searchNameJson(payload) {
  const { data } = yield SearchAPI.fetchSearchName(payload);
  try {
      yield put(onSuccessNameJson({ result: data }));
  } catch (error) {
      yield put(onFailNameJson(data))
  }
}

function* watch() {
  yield takeEvery(SEARCH_ADDRESS_JSON, searchAddressJson);
  yield takeEvery(SEARCH_NAME_JSON, searchNameJson);
}

export default function* trade() {
  yield spawn(watch);
}