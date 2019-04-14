import React from 'react'
import { connect } from 'react-redux'

function RoomList({ rooms }) {
  return (
    <section className="room-list">
      <div className="room-selection">
        <input type="text" placeholder="join room"/>
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

export default connect(mapStateToProps, null)(RoomList)
