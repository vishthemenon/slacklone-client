import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import update from 'react-addons-update'



class Channel extends Component {

  onClick() {
    console.log(this.props.name)
  }

  render() {
    return (
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    )

  }
}

class ChannelList extends Component {

  render(){
    return (
      <ul>
      {this.props.channels.map(name =>
        <Channel key={name} name={name} />
      )}
      </ul>
    )
  }
}

class ChannelForm extends Component {

  render() {
    return (
      <input onKeyUp={this.props.handleSubmit} type="text" />
    )
  }
}


class ChannelSection extends Component {


  constructor(props) {
    super(props)
    this.state = {channelList: ['cool', 'very cool', 'super cool']}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    if(event.which == 10 || event.which == 13) {
      let {channelList} = this.state
      channelList.push(event.target.value)
      this.setState({
        channelList: channelList
      })
      // this.setState({channelList: update(this.state.channelList, {$push: [event.target.value]})})
      event.target.value = ""
      console.log(this.state.channelList)
    }
  }

  render() {
    return (
      <section>
      <ChannelList channels={this.state.channelList} />
      <ChannelForm handleSubmit={this.handleSubmit}/>
      </section>
    )
  }
}

ReactDOM.render(
  <ChannelSection/>,
  document.getElementById('app')
)
