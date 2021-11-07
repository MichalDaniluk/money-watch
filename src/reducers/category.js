const categoryReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload;
    default:
      return 0;
  }
};

export default categoryReducer;
