export const technologyInfo = (state = [], action) => {
  switch (action.type) {
    case "SET_TECHNOLOGY":
      return { ...state, technology: action.data };
  }
  return state;
};
