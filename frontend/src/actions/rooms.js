export function sendMessage(room, message) {
  return {
    type: "SEND_MESSAGE",
    message,
    phx: { channel: `room:${room}`}
  }
}
