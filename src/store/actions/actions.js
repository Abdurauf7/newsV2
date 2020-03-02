export const getData = data => {
  return {
    type: "GET_DATA",
    data: data
  };
};

export const getMoreData = data => {
  return {
    type: "GET_MORE_DATA",
    data: data
  };
};

export const setData = data => {
  // console.log("setData", data);
  return {
    type: "SET_DATA",
    data: data
  };
};
export const getBussinessData = data => {
  return {
    type: "GET_DATA_BUSSINESS",
    data: data
  };
};

export const getMoreBussinessData = data => {
  return {
    type: "GET_MORE_BUSSINESS_DATA",
    data: data
  };
};

export const setBussiness = data => {
  return {
    type: "SET_BUSSINESS",
    data: data
  };
};

export const getTechnologyData = data => {
  return {
    type: "GET_TECHNOLOGY_DATA",
    data: data
  };
};

export const getMoreTechnologyData = data => {
  return {
    type: "GET_MORE_TECHNOLOGY_DATA",
    data: data
  };
};

export const setTechnologyData = data => {
  return {
    type: "SET_TECHNOLOGY",
    data: data
  };
};

export const getSportsNews = data => {
  return {
    type: "GET_SPORTS_NEWS",
    data: data
  };
};

export const getMoreSportsNews = data => {
  return {
    type: "GET_MORE_SPORTS_NEWS",
    data: data
  };
};

export const setSportsNews = data => {
  return {
    type: "SET_SPORTS_NEWS",
    data: data
  };
};
