export default (state = true, action) => {
  switch (action.type) {
    case "MAIN_CONT_IMG":
      return action.payload;
    default:
      return state;
  }
};
