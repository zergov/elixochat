import React, { useState } from 'react';
import './App.css';

export default props => {
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState(["zergov", "goyette"])

  function updateUsers(users) {
    setUsers(users)
  }

  function addMessage(message) {
    setMessages([...messages, message])
  }

  return (
    <div className="app">
      <h1>Elixochat</h1>
      <div className="chat">
        <section className="chatbox">
          <ul>
            { messages.map(message => <li>{message}</li>) }
          </ul>
          <textarea rows="4"></textarea>
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
