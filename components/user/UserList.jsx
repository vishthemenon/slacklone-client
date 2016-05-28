import React, { Component } from 'react'
import List from 'material-ui/List'
import User from './User'

class UserList extends Component {

  propTypes: {
    users: React.PropTypes.array.isRequired,
    setUser: React.PropTypes.func.isRequired
  }

  render () {

    return (
      <List>
        {this.props.users.map(user =>
          <User key={user.id} user={user} activeUser={this.props.activeUser} setUser={this.props.setUser} />
        )}
      </List>
    )
  }
}

export default UserList
