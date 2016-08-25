import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Alert, Col, Button, form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import actions from '../redux/actions'
import { browserHistory } from 'react-router'

class AddUser extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      username: '',
      email: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(actions.addUser(this.state.username, this.state.email))
    browserHistory.push("/")
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  render() {
    return (
      <Row>
        <h1>Add User</h1>
        <Col md={6}>
          <form>
            <FormGroup controlId="formControlsText">
              <ControlLabel>Username</ControlLabel>
              <FormControl type="text" onChange={this.handleUsernameChange.bind(this)} value={this.state.username} placeholder="Enter username" />
            </FormGroup>
            <FormGroup controlId="formControlsEmail">
              <ControlLabel>Email address</ControlLabel>
              <FormControl type="email" onChange={this.handleEmailChange.bind(this)} value={this.state.email} placeholder="Enter email" />
            </FormGroup>
            <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary" type="submit"> Add </Button>
          </form>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(AddUser)
