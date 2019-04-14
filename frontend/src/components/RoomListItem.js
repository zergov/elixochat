import React from 'react'

export default ({ name, onClick, onClose, active }) => {
  const activeStyle = active ? { textDecoration: 'underline' } : {}
  return (
    <li style={{ cursor: 'pointer', ...activeStyle }}>
      <i onClick={onClose} class="fas fa-times-circle"></i> <span onClick={onClick}>{name}</span>
    </li>
  )
}
