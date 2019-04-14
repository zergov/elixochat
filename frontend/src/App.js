import React, { useState } from 'react';
import './App.css';

export default props => {
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState(["zergov", "goyette"])

  function addMessage(message) {
    setMessages([...messages, message])
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
          <ul>
            { messages.map(message => <li>{message}</li>) }
          </ul>
          <textarea onKeyDown={onMessageChange} rows="4"></textarea>
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
