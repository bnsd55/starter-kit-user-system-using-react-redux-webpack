
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'

export default function configureStore(initialState = { users: [] }) {
  return createStore(rootReducer, initialState, compose(applyMiddleware(logger())))
}
