export const sportNews = (state = [], action) => {
  switch (action.type) {
    case "SET_SPORTS_NEWS":
      return { ...state, sports: action.data };
  }
  return state;
};
