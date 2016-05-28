import React, { Component } from 'react'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'

class Message extends Component {
  propTypes: {
    message: React.PropTypes.object.isRequired
  }

  render() {
    const {message} = this.props
    return (
      <ListItem
          leftAvatar={<Avatar src="http://thecatapi.com/api/images/get?format=src&type=png" />}
          primaryText={message.user>0?"anonymous":this.props.users[message.user-1].name}
          secondaryText={message.text}
          secondaryTextLines={1}
        />
    )
  }
}

export default Message
