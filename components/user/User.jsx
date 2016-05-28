import React, { Component } from 'react'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'

class User extends Component {
  propTypes: {
    user: React.PropTypes.object.isRequired,
    setUser: React.PropTypes.func.isRequired
  }

  render() {
    const {user, activeUser} = this.props
    const active  = activeUser == user.id? "active" : ""
    return (
      <ListItem className={active} primaryText={user.name} style={{paddingLeft: '8px'}} leftAvatar={<Avatar src="http://thecatapi.com/api/images/get?format=src&type=png" />} />
    )
  }
}

export default User
