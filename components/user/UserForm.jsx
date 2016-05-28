import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class UserForm extends Component {

  propTypes: {
    addUser: React.PropTypes.func.isRequired
  }

  handleKeyUp(event) {
    if(event.target.value != ""){
      if(event.which == 10 || event.which == 13) {
        this.props.setUser(event.target.value)
        event.target.value = ""
      }
    }
  }

  render() {
    return (
      <div id="newUserWrapper">
      <TextField  onKeyUp={this.handleKeyUp.bind(this)}
                  type="text"
                  floatingLabelText="Set Username"
                  fullWidth={true} />
                  </div>
    )
  }
}

export default UserForm
