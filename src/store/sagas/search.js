import { put, spawn, takeEvery } from "@redux-saga/core/effects";
import * as SearchAPI from "../../lib/api/search";
import { onFailIndicesJson, onSuccessIndicesJson, SEARCH_INDICES_JSON } from "../actions/search";

function* searchIndices(payload) {
  const { data } = yield SearchAPI.fetchSearchIndices(payload);
  try {
      yield put(onSuccessIndicesJson({ ...data }));
  } catch (error) {
      yield put(onFailIndicesJson(data))
  }
}

function* watch() {
  yield takeEvery(SEARCH_INDICES_JSON, searchIndices);
}

export default function* search() {
  yield spawn(watch);
}