export default (state = [], action) => {
  switch (action.type) {
    case "NEW_MESSAGE":
      return [...state, action.message];
    default:
      return state;
  }
}
