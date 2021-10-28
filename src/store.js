/* global process */

/**
 * Configure Redux Store
 */
import { createStore, compose, applyMiddleware } from "redux";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk";
import root from "./reducers";

const middlewares = [
  createPromise({ promiseTypeSuffixes: ["PENDING", "SUCCESS", "ERROR"] }),
  thunk,
];

if (process.env.APPMODE !== "production") {
  const logger = require("redux-logger").createLogger();
  middlewares.push(logger);
}

export default createStore(root, compose(applyMiddleware(...middlewares)));
