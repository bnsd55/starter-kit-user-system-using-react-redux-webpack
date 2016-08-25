let userReducer = function(users = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return (
          [...users, {
            id: action.payload.id,
            username: action.payload.username,
            email: action.payload.email
          }]
      );
    case 'DELETE_USER':
      return (
        users.filter((user) => {
          return (user.id != action.payload.id)
        })
      );
    case 'UPDATE_USER':
      return (
        users.map((user, index) => {
          return (user.id == action.payload.newUser.id) ? action.payload.newUser : user
        })
      );
    default:
      return users;
  }
}

export default userReducer
