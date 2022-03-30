import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const configReducer = combineReducers({
  booksReducer,
});

const store = createStore(configReducer, applyMiddleware(logger));

export default store;
