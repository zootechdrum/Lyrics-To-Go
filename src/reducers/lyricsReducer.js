export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_LYRICS":
      return action.payload;
    case "MAIN_CONT_IMG":
      return action.payload;
    default:
      return state;
  }
};
