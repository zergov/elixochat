export function sendMessage(room, message) {
  return {
    type: "SEND_MESSAGE",
    message,
    phx: { channel: `room:${room}`}
  }
}

export function joinRoom(room) {
  return {
    type: "PHX_JOIN_CHANNEL",
    channel: `room:${room}`,
  }
}

export function leaveRoom(room) {
  return {
    type: "LEAVE_ROOM",
    room,
  }
}
