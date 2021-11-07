const accountReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECT_ACCOUNT":
      return state + action.payload;

    case "SET_ACCOUTS":
      return state + action.payload;

    default:
      return 0;
  }
};

export default accountReducer;
