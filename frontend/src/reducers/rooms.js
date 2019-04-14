export default (state = {}, action) => {
  switch (action.type) {
    case "JOINED_ROOM":
      return {...state, [action.payload.room_name]: []}
    case "NEW_MESSAGE": {
      const room = action.payload.room_name
      return { ...state, [room]: [...state[room], action.payload.message] }
    }
    case "LEAVE_ROOM": {
      const { [action.room]: room, ...rooms } = state
      return rooms
    }
    default:
      return state;
  }
}
