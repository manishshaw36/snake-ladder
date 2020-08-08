import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combineReducers from '../reducers/index';

let middleware;

if (process && process.env && (process.env.NODE_ENV === 'production')) {
    middleware = applyMiddleware(thunk, promise);
} else {
    middleware = applyMiddleware(thunk, promise, logger);
}

export default createStore(combineReducers, middleware);