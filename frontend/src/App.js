import React, { useState, useEffect } from 'react';
import { Socket } from 'phoenix'
import './App.css';

export default props => {
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState(["zergov", "goyette"])

  // connect to the chat server when mounting the app
  useEffect(() => {
    const socket = new Socket('ws://localhost:4000/socket')
    socket.connect()

    // join the lobby
    const lobby = socket.channel('room:lobby')
    lobby.join()
      .receive("ok", () => addMessage("Connected to lobby.") )
      .receive("error", ({reason}) => console.log("failed join", reason) )
      .receive("timeout", () => console.log("Networking issue. Still waiting..."))
  }, [])

  function addMessage(message) {
    setMessages([...messages, message])

    // show latest message in chatbox
    const chatDOM = document.getElementById("chat-messages");
    chatDOM.scrollTop = chatDOM.scrollHeight;
  }

  function onMessageChange(event) {
    if (event.key == "Enter") {
      event.preventDefault()
      addMessage(event.target.value)
      event.target.value = null
    }
  }

  return (
    <div className="app">
      <h1>Elixochat</h1>
      <div className="chat">
        <section className="chatbox">
          <ul id="chat-messages">
            { messages.map(message => <li>{message}</li>) }
          </ul>
          <textarea onKeyDown={onMessageChange}></textarea>
        </section>
        <section className="online-users">
          <ul>
            { users.map(user => <li>{user}</li>) }
          </ul>
        </section>
      </div>
    </div>
  )
}
