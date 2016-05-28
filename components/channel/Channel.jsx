import React, { Component } from 'react'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'

class Channel extends Component {

  propTypes: {
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.number.isRequired,
    channel: React.PropTypes.object.isRequired
  }

  handleClick(event) {
    const { setChannel, channel } = this.props
    setChannel(channel.id)
  }

  render() {
    const {channel} = this.props
    const active  = this.props.activeChannel == this.props.channel.id? "active" : ""
    return (
      <ListItem className={active}
                onClick={this.handleClick.bind(this)}
                primaryText={channel.name}
                style={{
                  paddingLeft: '8px'
                }}
                leftAvatar={<Avatar src="http://thecatapi.com/api/images/get?format=src&type=png" />} />
    )
  }
}


export default Channel
