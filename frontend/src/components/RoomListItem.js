import React from 'react'

export default ({ name, onClick, onClose }) => {
  return (
    <li style={{ cursor: 'pointer' }}>
      <i onClick={onClose} class="fas fa-times-circle"></i> <span onClick={onClick}>{name}</span>
    </li>
  )
}
