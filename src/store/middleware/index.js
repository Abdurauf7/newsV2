import axios from "axios";

import { setData } from "../actions/actions";

import { setBussiness } from "../actions/actions";

import { setTechnologyData } from "../actions/actions";
import { setSportsNews } from "../actions/actions";

// get data for general page

export function fetchArticleMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === "GET_DATA") {
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=284367f5ba734899b242057a81dac8e0"
          )
          .then(({ data }) => {
            dispatch(setData(data));
          });
      }
      return next(action);
    };
  };
}

// get more data for general page

export function fetchMoreData({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === "GET_MORE_DATA") {
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?pageSize=100&country=us&apiKey=284367f5ba734899b242057a81dac8e0"
          )
          .then(({ data }) => {
            dispatch(setData(data));
          });
      }
      return next(action);
    };
  };
}

// get data for bussiness page

export function fetchBussinessInfo({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === "GET_DATA_BUSSINESS") {
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=284367f5ba734899b242057a81dac8e0"
          )
          .then(({ data }) => {
            dispatch(setBussiness(data));
          });
      }
      return next(action);
    };
  };
}

// get more data for bussiness page

export function fetchMoreBussinessData({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === "GET_MORE_BUSSINESS_DATA") {
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?pageSize=100&country=gb&category=business&apiKey=284367f5ba734899b242057a81dac8e0"
          )
          .then(({ data }) => {
            dispatch(setBussiness(data));
          });
      }
      return next(action);
    };
  };
}

// get data for technology page

export function fetchTechnologyInfo({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === "GET_TECHNOLOGY_DATA") {
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=284367f5ba734899b242057a81dac8e0"
          )
          .then(({ data }) => {
            dispatch(setTechnologyData(data));
          });
      }
      return next(action);
    };
  };
}

// get more data for technology page

export function fetchMoreTechnologyInfo({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === "GET_MORE_TECHNOLOGY_DATA") {
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?pageSize=100&country=us&category=technology&apiKey=284367f5ba734899b242057a81dac8e0"
          )
          .then(({ data }) => {
            dispatch(setTechnologyData(data));
          });
      }
      return next(action);
    };
  };
}

// get data for Sports page

export function fetchSportsData({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === "GET_SPORTS_NEWS") {
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=284367f5ba734899b242057a81dac8e0"
          )
          .then(({ data }) => {
            dispatch(setSportsNews(data));
          });
      }
      return next(action);
    };
  };
}

// get more data for Sports page

export function fetchMoreSportsData({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === "GET_MORE_SPORTS_NEWS") {
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?pageSize=100&country=us&category=sports&apiKey=284367f5ba734899b242057a81dac8e0"
          )
          .then(({ data }) => {
            dispatch(setSportsNews(data));
          });
      }
      return next(action);
    };
  };
}
