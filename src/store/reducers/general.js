export const articleReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, articles: action.data };
  }
  return state;
};
