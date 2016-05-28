import React, { Component } from 'react'
import List from 'material-ui/List'
import Message from './Message'

class MessageList extends Component {

  propTypes: {
    messages: React.PropTypes.array.isRequired
  }

  render () {
    return (
      <List>
        {this.props.messages.map(message =>
          <Message key={message.id} message={message} users={this.props.users}/>
        )}
      </List>
    )
  }
}

export default MessageList
