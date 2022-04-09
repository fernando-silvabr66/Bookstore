import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

const configReducer = combineReducers({
  booksReducer, statusReducer,
});

const store = createStore(configReducer, applyMiddleware(logger, thunk));

export default store;
