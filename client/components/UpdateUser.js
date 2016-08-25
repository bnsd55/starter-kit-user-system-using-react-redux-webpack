import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Alert, Col, Button, form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import actions from '../redux/actions'
import { browserHistory } from 'react-router'

class UpdateUser extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      currentUser: this.props.users.find((user) => { return (user.id === parseInt(this.props.params.id)) })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(actions.updateUser(this.state.currentUser))
    browserHistory.push("/")
  }

  handleUsernameChange(e) {
    this.setState(Object.assign(this.state, {currentUser: Object.assign(this.state.currentUser, {username: e.target.value})}))
  }

  handleEmailChange(e) {
    this.setState(Object.assign(this.state, {currentUser: Object.assign(this.state.currentUser, {email: e.target.value})}))
  }

  render() {
    return (
      <div>
        <h1> Update {this.state.currentUser.username}'s details</h1>
        <Col md={6}>
          <form>
            <FormGroup controlId="formControlsText">
              <ControlLabel>ID</ControlLabel>
              <FormControl type="text" value={this.state.currentUser.id} disabled/>
            </FormGroup>
            <FormGroup controlId="formControlsText">
              <ControlLabel>Username</ControlLabel>
              <FormControl type="text" onChange={this.handleUsernameChange.bind(this)} value={this.state.currentUser.username} placeholder="Enter username" />
            </FormGroup>
            <FormGroup controlId="formControlsEmail">
              <ControlLabel>Email address</ControlLabel>
              <FormControl type="email" onChange={this.handleEmailChange.bind(this)} value={this.state.currentUser.email} placeholder="Enter email" />
            </FormGroup>
            <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary" type="submit"> Add </Button>
          </form>
        </Col>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(UpdateUser)
