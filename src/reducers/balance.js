const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return state + action.payload;
    case "SUB_VALUE":
      return state - action.payload;
    default:
      return 0;
  }
};

export default balanceReducer;
