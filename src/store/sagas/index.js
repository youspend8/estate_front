import { all, fork } from "redux-saga/effects";
import trade from "./trade";
import search from "./search";

export default function* sagas() {
  yield all([
    fork(trade),
    fork(search)
  ]);
}