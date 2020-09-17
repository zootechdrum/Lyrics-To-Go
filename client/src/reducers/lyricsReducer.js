export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_LYRICS":
      return action.payload;
    default:
      return state;
  }
};
