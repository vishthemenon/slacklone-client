import React, { Component } from 'react'
import ChannelSection from './channel/ChannelSection'
import UserSection from './user/UserSection'
import MessageSection from './message/MessageSection'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Snackbar from 'material-ui/SnackBar';
import Socket from '../socket'
require('../stylesheets/main.css')


class App extends Component {

  constructor(props) {
    super(props)
    this.addChannel = this.addChannel.bind(this)
    this.setUser = this.setUser.bind(this)
    this.addMessage = this.addMessage.bind(this)
    this.setChannel = this.setChannel.bind(this)
    this.state = {
      channels: [],
      activeChannel: 0,
      activeUser: 0,
      users: [],
      messages: [],
      connected: false
    }
  }

  componentDidMount() {
    let ws = new WebSocket('ws://localhost:3000')
    let socket = this.socket = new Socket(ws)
    socket.on('connect', this.onConnect.bind(this))
    socket.on('disconnect', this.onDisconnect.bind(this))
    socket.on('channel add', this.onAddChannel.bind(this))
    socket.on('user add', this.onAddUser.bind(this))
    socket.on('user edit', this.onEditUser.bind(this))
    socket.on('user remove', this.onRemoveUser.bind(this))
    socket.on('user id', this.onUserId.bind(this))
    socket.on('message add', this.onAddMessage.bind(this))
  }

  onUserId(data) {
    console.log(data.id)
  }


  onAddMessage(message) {
    let {messages} = this.state
    messages.push(message)
    this.setState({messages})
  }

  onAddUser(user) {
    let {users} = this.state
    users.push(user)
    this.setState({users})
  }

  onEditUser(editUser) {
    let {users} = this.state
    users = users.map(user => {
      if (editUser.id === user.id){
        return editUser
      }
        return user
    })
    console.log({users})
    this.setState({users})
  }

  onRemoveUser(removeUser) {
    let {users} = this.state
    users = users.filter(user => {
      return removeUser.id !== user.id
    })
    this.setState({users})
  }

  onConnect() {
    this.setState({connected: true})
    this.socket.emit("channel subscribe")
    this.socket.emit("user subscribe")
  }

  onDisconnect() {
    this.setState({connected: false})
  }

  onAddChannel(channel) {
    let {channels} = this.state
    channels.push(channel)
    this.setState({channels})
  }

  addChannel(name) {
    this.socket.emit("channel add", {name})
  }

  setChannel(activeChannel) {
    this.setState({activeChannel})
    this.socket.emit('message unsubscribe')
    this.setState({messages: []})
    this.socket.emit('message subscribe', {
      channel: activeChannel
    })
  }

  setUser(name) {
    this.socket.emit("user edit", {name})
  }

  addMessage(text) {
    let {activeChannel, activeUser} = this.state
    this.socket.emit("message add", {
      text,
      channel: activeChannel,
      user: activeUser
    })
  }

  handleRequestClose() {
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <main>
      <ChannelSection addChannel={this.addChannel} setChannel={this.setChannel} {...this.state}/>
      <UserSection setUser={this.setUser} {...this.state} />
      <MessageSection addMessage={this.addMessage} {...this.state}/>
      <Snackbar
          open={!this.state.connected}
          message="Disconnected from Server"
          onRequestClose={this.handleRequestClose}
        />
      </main>
      </MuiThemeProvider>
    )
  }
}

export default App
