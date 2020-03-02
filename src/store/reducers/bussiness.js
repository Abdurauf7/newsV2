export const bussinessInfo = (state = [], action) => {
  switch (action.type) {
    case "SET_BUSSINESS":
      return { ...state, bussiness: action.data };
  }
  return state;
};
