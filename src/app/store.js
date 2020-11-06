import {combineReducers, createStore} from '@reduxjs/toolkit';
import reducer from './Containers/TodoList/reducer';
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({reducer});

const middlewareEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(rootReducer, middlewareEnhancer);

store.subscribe(() => {
  console.log('store', store.getState().reducer);
})

export default store;
