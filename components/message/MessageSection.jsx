import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import AppBar from 'material-ui/AppBar'

class MessageSection extends Component {

  propTypes: {
    messages: React.PropTypes.array.isRequired,
    activeChannel: React.PropTypes.number.isRequired,
    channels: React.PropTypes.array.isRequired,
    users: React.PropTypes.users.isRequired,
    newMessage: React.PropTypes.func.isRequired
  }

  render() {
    const {activeChannel, channels} = this.props
    const activeChannelName = activeChannel>0?channels[activeChannel-1].name:"A Wannabe Slack Clone"
    return (
      <section id="message">
        <AppBar title={activeChannelName} showMenuIconButton={false}/>
        <MessageList {...this.props}/>
        <MessageForm {...this.props}/>
      </section>
    )
  }
}

export default MessageSection
