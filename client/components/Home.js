import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <Row>
        {
          this.props.users.map((user) => {
            return (
              <Col key={user.id} md={3}>
              <ListGroup componentClass="ul">
                <ListGroupItem bsStyle="info"> {user.username} </ListGroupItem>
                <ListGroupItem> <Glyphicon glyph="remove" /> <Link to={`/deleteUser/${user.id}`}>DELETE</Link> </ListGroupItem>
                <ListGroupItem> <Glyphicon glyph="edit" />  <Link to={`/updateUser/${user.id}`}>UPDATE </Link> </ListGroupItem>
                <ListGroupItem> <Glyphicon glyph="eye-open" /> <Link to={`/users/${user.id}`}>PROFILE</Link> </ListGroupItem>
              </ListGroup>
              </Col>
            )
          })
        }
        </Row>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Home)
