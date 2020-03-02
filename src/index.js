// react
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// third part
import "antd/dist/antd.css";

// custom
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchArticleMiddleware } from "./store/middleware";
import { fetchBussinessInfo } from "./store/middleware/index";
import { fetchTechnologyInfo } from "./store/middleware/index";
import { fetchSportsData } from "./store/middleware/index";
import { fetchMoreData } from "./store/middleware/index";
import { fetchMoreBussinessData } from "./store/middleware/index";
import { fetchMoreTechnologyInfo } from "./store/middleware/index";
import { fetchMoreSportsData } from "./store/middleware/index";
import rootReducer from "./store/reducers";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    fetchArticleMiddleware,
    fetchBussinessInfo,
    fetchTechnologyInfo,
    fetchSportsData,
    fetchMoreData,
    fetchMoreBussinessData,
    fetchMoreTechnologyInfo,
    fetchMoreSportsData
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
