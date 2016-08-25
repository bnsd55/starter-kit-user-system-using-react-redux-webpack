import React, { Component } from 'react'
import { Link } from 'react-router'
import AddUser from './AddUser'
import { Grid, Row, Nav, NavItem } from 'react-bootstrap'

export default class App extends Component {
  render () {
    return (
        <Grid>
          <Row>
            <ul className="nav nav-pills">
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/addUser"> Add user </Link></li>
              <li><a href="http://github.com/bnsd55/User-System-using-react-redux-webpack"> Git repo </a></li>
            </ul>
          </Row>

          <Row>
            {this.props.children}
          </Row>

        </Grid>
    )
  }
}
