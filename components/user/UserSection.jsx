import React, { Component } from 'react'
import UserList from './UserList'
import UserForm from './UserForm'
import AppBar from 'material-ui/AppBar'

class UserSection extends Component {

  propTypes: {
    users: React.PropTypes.array.isRequired,
    newUser: React.PropTypes.func.isRequired,
    setUser: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <section id="user">
      <AppBar title={"Users"} showMenuIconButton={false}/>
      <UserForm {...this.props}/>
      <UserList {...this.props}/>
      </section>
    )
  }
}

export default UserSection
