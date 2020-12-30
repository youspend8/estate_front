import { spawn, put, takeEvery } from "redux-saga/effects";
import * as TradeAPI from "../../lib/api/trade";
import { TRADE_AGGREGATE, onSuccess, onFail, TRADE_SEARCH, TRADE_STATS_PERIOD, TRADE_STATS } from "../actions";

function* tradeAggregate({ query, type }) {
  const { data } = yield TradeAPI.fetchTradeAggregate(query);
  try {
      yield put(onSuccess({ invoke: type, result: data }));
  } catch (error) {
      yield put(onFail(data))
  }
}

function* tradeSearch({ query, type }) {
  const { data } = yield TradeAPI.fetchTradeSearch(query);
  try {
      yield put(onSuccess({ invoke: type, result: data }));
  } catch (error) {
      yield put(onFail(data))
  }
}

function* tradeStats({ query, type }) {
  const { data } = yield TradeAPI.fetchTradeStats(query);
  try {
    yield put(onSuccess({ invoke: type, result: data }));
  } catch (error) {
    yield put(onFail(data));
  }
}

function* tradeStatsPeriod({ query, type }) {
  const { data } = yield TradeAPI.fetchTradeStatsPeriod(query);
  try {
    yield put(onSuccess({ invoke: type, result: data }));
  } catch (error) {
    yield put(onFail(data));
  }
}

function* watch() {
  yield takeEvery(TRADE_AGGREGATE, tradeAggregate);
  yield takeEvery(TRADE_SEARCH, tradeSearch);
  yield takeEvery(TRADE_STATS, tradeStats);
  yield takeEvery(TRADE_STATS_PERIOD, tradeStatsPeriod);
}

export default function* trade() {
  yield spawn(watch);
}