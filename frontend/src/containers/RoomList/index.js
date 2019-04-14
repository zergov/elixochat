import React from 'react'

export default props => {
  return (
    <section className="room-list">
      <div className="room-selection">
        <input type="text" placeholder="enter room name"/>
      </div>
      <ul>
        { ["lobby"].map((room, i) => <li key={i}>{room}</li>) }
      </ul>
    </section>
  )
}
