const initialState = {
  currentRoom: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "SET_CURRENT_ROOM":
      return {...state, currentRoom: action.room}
    case "LEAVE_ROOM": {
      return action.room === state.currentRoom ? {...state, currentRoom: 'lobby'} : state
    }
    case "JOINED_ROOM":
      return {...state, currentRoom: action.payload.room_name}
    default:
      return state
  }
}
