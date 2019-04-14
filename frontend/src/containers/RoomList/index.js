import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/rooms'

function RoomList({ rooms, joinRoom }) {
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
        { rooms.map((room, i) => <li key={i}>{room}</li>) }
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
    joinRoom: room => dispatch(actions.joinRoom(room))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)
