import { combineReducers } from "redux";
import { articleReducer } from "./general";
import { bussinessInfo } from "./bussiness";
import { technologyInfo } from "./technology";
import { sportNews } from "./sports";

const rootReducer = combineReducers({
  articles: articleReducer,
  bussiness: bussinessInfo,
  technology: technologyInfo,
  sports: sportNews
});

export default rootReducer;
