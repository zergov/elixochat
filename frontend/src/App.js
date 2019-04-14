import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import './App.css';

import RoomList from './containers/RoomList'
import ChatBox from './containers/ChatBox'

function App({ joinRoom }) {
  // connect to the lobby when mounting the app
  useEffect(() => {
    joinRoom("lobby")
  }, [])

  return (
    <div className="app">
      <h1>Elixochat</h1>
      <div className="chat">
        <ChatBox />
        <RoomList />
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    joinRoom: room => dispatch(({ type: "PHX_JOIN_CHANNEL", channel: `room:${room}` })),
  }
}

export default connect(null, mapDispatchToProps)(App)
