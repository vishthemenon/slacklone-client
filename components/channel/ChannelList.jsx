import React, { Component } from 'react'
import Channel from './Channel'
import List from 'material-ui/List'

class ChannelList extends Component {

  propTypes: {
    channels: React.PropTypes.array.isRequired,
    activeChannel: React.PropTypes.number.isRequired,
    setChannel: React.PropTypes.func.isRequired
  }

  render(){
    return (
      <List>
      {this.props.channels.map(channel =>
        <Channel  key={channel.id}
                  setChannel={this.props.setChannel}
                  channel={channel}
                  activeChannel={this.props.activeChannel}
                  />
      )}
      </List>
    )
  }
}

export default ChannelList
