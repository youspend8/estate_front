import { combineReducers } from "redux";

const context = require.context('.', true, /^(?!.\/index).*.js$/);

const modules = {};

context.keys().forEach(key => {
  const regex = /.\/(.*?).js$/;
  const moduleName = regex.test(key) && key.match(regex)[1];
  modules[moduleName] = context(key).default;
});

export default combineReducers(modules);