export default (state = [], action) => {
  switch (action.type) {
    case "NEW_MESSAGE":
      return [...state, action.payload.message];
    default:
      return state;
  }
}
