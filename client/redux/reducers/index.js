import userReducer from './userReducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  users: userReducer,
  routing: routerReducer
})
