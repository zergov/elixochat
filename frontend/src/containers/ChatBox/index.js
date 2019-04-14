import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/rooms'

function ChatBox({ rooms, sendMessage, currentRoom }) {
  useEffect(() => {
    // show latest message in chatbox
    const chatDOM = document.getElementById("chat-messages");
    chatDOM.scrollTop = chatDOM.scrollHeight;
  }, [rooms[currentRoom]])

  function onMessageChange(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      sendMessage(currentRoom, event.target.value)
      event.target.value = null
    }
  }

  const messages = rooms[currentRoom] || []
  return (
    <section className="chatbox">
      <ul id="chat-messages">
        { messages.map((message, i) => <li key={i}>{message}</li>) }
      </ul>
      <textarea onKeyDown={onMessageChange}></textarea>
    </section>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: (room, message) => dispatch(actions.sendMessage(room, message))
  }
}

function mapStateToProps(state) {
  return {
    currentRoom: state.chat.currentRoom,
    rooms: state.rooms,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)
