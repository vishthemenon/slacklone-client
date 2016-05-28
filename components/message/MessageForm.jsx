import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class MessageForm extends Component {

  propTypes: {
    addMessage: React.PropTypes.func.isRequired
  }

  handleKeyUp(event) {
    if((event.target.value != "") && (event.which == 10 || event.which == 13)){
      this.props.addMessage(event.target.value)
      event.target.value = ""
    }
  }

  render() {
    return (
      <div id="newMessageWrapper">
      <TextField  onKeyUp={this.handleKeyUp.bind(this)}
                  type="text"
                  floatingLabelText="New Message"
                  fullWidth={true} />
                  </div>
    )
  }
}

export default MessageForm
