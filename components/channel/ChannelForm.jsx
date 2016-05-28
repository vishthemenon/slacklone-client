import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class ChannelForm extends Component {

  propTypes: {
    addChannel: React.PropTypes.func.isRequired
  }

  handleKeyUp(event) {
    if((event.target.value != "") && (event.which == 10 || event.which == 13)){
      this.props.addChannel(event.target.value)
      event.target.value = ""
    }
  }

  render() {
    return (
      <div id="newChannelWrapper">
      <TextField  onKeyUp={this.handleKeyUp.bind(this)}
      type="text"
      floatingLabelText="New Channel"
      fullWidth={true} />
      </div>
    )
  }
}

export default ChannelForm
