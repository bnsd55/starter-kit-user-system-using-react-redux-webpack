let actions = {
  addUser: function(username, email){
    return {
      type: 'ADD_USER',
      payload: {
        id: Math.floor(Math.random() * 1000000),
        username: username,
        email: email
      }
    }
  },
  deleteUser: function(id) {
    return {
      type: 'DELETE_USER',
      payload: {
        id: id
      }
    }
  },
  updateUser: function(user) {
    return {
      type: 'UPDATE_USER',
      payload: {
        newUser: user
      }
    }
  }
}

export default actions
