import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/messages'

function ChatBox({ messages, sendMessage }) {
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
    messages: state.messages,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)
