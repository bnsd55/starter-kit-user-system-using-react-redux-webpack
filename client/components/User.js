import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { PageHeader } from 'react-bootstrap'

class User extends Component {
  render() {
    return (
      <div>
        {
          this.props.users.map((user) => {
            if (user.id === parseInt(this.props.params.id)) {
              return (
                <div key={user.id}>
                  <PageHeader>{user.username} <small>ID: {user.id}</small></PageHeader>
                  <h3>Email: { user.email}</h3>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(User)
