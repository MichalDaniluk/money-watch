const accountsReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_ACCOUNTS":
      return state + action.payload;

    default:
      return 0;
  }
};

export default accountsReducer;
