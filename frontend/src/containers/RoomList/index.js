import React from 'react'
import { connect } from 'react-redux'
import * as roomActions from '../../actions/rooms'
import * as chatActions from '../../actions/chat'

function RoomList({ rooms, joinRoom, setCurrentRoom }) {
  function onJoinRoomChange(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      joinRoom(event.target.value)
      event.target.value = null
    }
  }

  return (
    <section className="room-list">
      <div className="room-selection">
        <input onKeyDown={onJoinRoomChange} type="text" placeholder="join room"/>
      </div>
      <ul>
        { rooms.map((room, i) => <li style={{ cursor: 'pointer' }} onClick={() => setCurrentRoom(room)} key={i}>{room}</li>) }
      </ul>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    rooms: Object.keys(state.rooms)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    joinRoom: room => dispatch(roomActions.joinRoom(room)),
    setCurrentRoom: room => dispatch(chatActions.setCurrentRoom(room))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)
