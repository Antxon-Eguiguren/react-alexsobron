import { createStore, applyMiddleware } from 'redux';
import headerReducer from './header/header.reducer';
import logger from 'redux-logger';

const store = createStore(headerReducer, applyMiddleware(logger));

export default store;