import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import AddUser from './components/AddUser'
import DeleteUser from './components/DeleteUser'
import UpdateUser from './components/UpdateUser'
import Home from './components/Home'
import User from './components/User'
import configureStore from './redux/store'
import { Provider } from 'react-redux'

let initialState = {
  users: [{
    username: 'Eden',
    email: 'Eden@gmail.com',
    id: 1
  },
  {
    username: 'Maya',
    email: 'Maya@gmail.com',
    id: 2
  },
  {
    username: 'Alon',
    email: 'Alon@gmail.com',
    id: 3
  },
  {
    username: 'Max',
    email: 'Max@gmail.com',
    id: 4
  },
  {
    username: 'Itay',
    email: 'Itay@gmail.com',
    id: 5
  },
  {
    username: 'Ben',
    email: 'Ben@gmail.com',
    id: 6
  }]
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/addUser" component={AddUser} />
        <Route path="/deleteUser/:id" component={DeleteUser} />
        <Route path="/updateUser/:id" component={UpdateUser} />
        <Route path="/users/:id" component={User} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("container")
)
