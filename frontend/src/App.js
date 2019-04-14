import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from './actions/messages'
import './App.css';

function App({ joinRoom, sendMessage, messages }) {
  // connect to the chat server when mounting the app
  useEffect(() => {
    joinRoom("lobby")
  }, [])

  useEffect(() => {
    // show latest message in chatbox
    const chatDOM = document.getElementById("chat-messages");
    chatDOM.scrollTop = chatDOM.scrollHeight;
  }, [messages])

  function onMessageChange(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      sendMessage("lobby", event.target.value)
      event.target.value = null
    }
  }

  return (
    <div className="app">
      <h1>Elixochat</h1>
      <div className="chat">
        <section className="chatbox">
          <ul id="chat-messages">
            { messages.map((message, i) => <li key={i}>{message}</li>) }
          </ul>
          <textarea onKeyDown={onMessageChange}></textarea>
        </section>
        <section className="online-users">
          <ul>
            { ["zergov", "goyette"].map((user, i) => <li key={i}>{user}</li>) }
          </ul>
        </section>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    joinRoom: room => dispatch(({ type: "PHX_JOIN_CHANNEL", channel: `room:${room}` })),
    sendMessage: (room, message) => dispatch(actions.sendMessage(room, message))
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
