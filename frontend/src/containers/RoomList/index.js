import React from 'react'
import { connect } from 'react-redux'
import RoomListItem from '../../components/RoomListItem'
import * as roomActions from '../../actions/rooms'
import * as chatActions from '../../actions/chat'

function RoomList({ rooms, joinRoom, leaveRoom, setCurrentRoom, leaveChannel, currentRoom }) {
  function onJoinRoomChange(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      joinRoom(event.target.value)
      event.target.value = null
    }
  }

  function leave(room) {
    leaveRoom(room)
    leaveChannel(room)
  }

  return (
    <section className="room-list">
      <div className="room-selection">
        <input onKeyDown={onJoinRoomChange} type="text" placeholder="join room"/>
      </div>
      <ul>
        { rooms.map((room, i) =>
          <RoomListItem
            key={i}
            active={room === currentRoom}
            name={room}
            onClick={() => setCurrentRoom(room)}
            onClose={() => room !== "lobby" && leave(room)} />)
        }
      </ul>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    rooms: Object.keys(state.rooms),
    currentRoom: state.chat.currentRoom,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    joinRoom: room => dispatch(roomActions.joinRoom(room)),
    setCurrentRoom: room => dispatch(chatActions.setCurrentRoom(room)),
    leaveRoom: room => dispatch(roomActions.leaveRoom(room)),
    leaveChannel: room => dispatch({ type: "PHX_LEAVE_CHANNEL", channel: `room:${room}` }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)
