import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

const configReducer = combineReducers({
  booksReducer, statusReducer,
});

const store = createStore(configReducer, applyMiddleware(logger));

export default store;
