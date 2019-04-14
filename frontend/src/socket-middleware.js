export default function socketMiddleware(socket) {
  const channels = {}

  return store => next => action => {
    if (action.type === "PHX_JOIN_CHANNEL") {
      const channel = channels[action.channel] = socket.channel(action.channel)

      // dispatch everything sent from this channel to our store.
      channel.onMessage = (event, payload, ref) => {
        if (!event.startsWith('chan_reply') && !event.startsWith('phx_reply'))
          store.dispatch({ type: event, payload })
        return payload
      }

      channel.join()
    }

    if (action.type === "PHX_LEAVE_CHANNEL") {
      channels[action.channel].leave()
      delete channels[action.channel]
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
