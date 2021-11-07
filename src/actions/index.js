export const clearBalance = () => {
  return {
    type: "CLEAR",
  };
};

export const addValue = (value) => {
  return {
    type: "ADD_VALUE",
    payload: value,
  };
};

export const subValue = (value) => {
  return {
    type: "SUB_VALUE",
    payload: value,
  };
};

export const setCategory = (id) => {
  return {
    type: "SET_CATEGORY",
    payload: id,
  };
};

export const setAccount = (id) => {
  return {
    type: "SELECT_ACCOUNT",
    payload: id,
  };
};

export const setLoadedAccounts = (accouts) => {
  return {
    type: "SET_ACCOUNTS",
    payload: accouts,
  };
};
