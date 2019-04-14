export default function socketMiddleware(socket) {
  const channels = {}

  return store => next => action => {
    if (action.type === "PHX_JOIN_CHANNEL") {
      const channel = channels[action.channel] = socket.channel(action.channel)

      // dispatch everything sent from this channel to our store.
      channel.onMessage = (type, payload, ref) => {
        store.dispatch({ type, payload })
        return payload
      }

      channel.join()
    }

    // push application actions into the corresponding phoenix channel
    if (action.phx && action.phx.channel) {
      const { type, phx, ...payload } = action
      const channel = channels[phx.channel]
      if (channel)
        channel.push(type, payload)
    }

    return next(action)
  }
}
