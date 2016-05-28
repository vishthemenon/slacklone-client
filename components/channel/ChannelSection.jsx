import React, { Component } from 'react'
import ChannelList from './ChannelList'
import ChannelForm from './ChannelForm'
import AppBar from 'material-ui/AppBar'

class ChannelSection extends Component {

  propTypes: {
    channels: React.PropTypes.array.isRequired,
    addChannel: React.PropTypes.func.isRequired,
    setChannel: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <section id="channel">
      <AppBar title={"Channels"} showMenuIconButton={false}/>
      <ChannelForm {...this.props} />
      <ChannelList {...this.props} />
      </section>
    )
  }
}

export default ChannelSection
