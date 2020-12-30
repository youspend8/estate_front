import { all, fork } from "redux-saga/effects";
import trade from "./trade";

export default function* sagas() {
  yield all([
    fork(trade)
  ]);
}