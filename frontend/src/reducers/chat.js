const initialState = {
  currentRoom: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "JOINED_ROOM":
      return {...state, currentRoom: action.payload.room_name}
    default:
      return state
  }
}
