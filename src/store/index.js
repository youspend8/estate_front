import { createStore, applyMiddleware, compose } from "redux";
import modules from './modules';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(modules, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export default store;