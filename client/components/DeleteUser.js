import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Alert } from 'react-bootstrap'
import actions from '../redux/actions'
import { browserHistory } from 'react-router'

class DeleteUser extends Component {

  handleDeleteUserClickYes(id) {
    this.props.dispatch(actions.deleteUser(id))
    browserHistory.push('/')
  }

  handleDeleteUserClickNo() {
    browserHistory.push('/')
  }

  render() {
    return (
      <div>
        {
          this.props.users.map((user) => {
            if (user.id === parseInt(this.props.params.id)) {
              return (
                <div key={user.id}>
                  <Alert bsStyle="warning">
                    Are you sure you want to delete <strong>{ user.username }'s</strong> user ?
                  </Alert>

                  <Button onClick={this.handleDeleteUserClickYes.bind(this, parseInt(user.id))} bsStyle="success">Yes</Button>
                  { ' ' }
                  <Button onClick={this.handleDeleteUserClickNo.bind(this)} bsStyle="danger">No</Button>
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

export default connect(mapStateToProps)(DeleteUser)
