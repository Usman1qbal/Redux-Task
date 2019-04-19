import { SET_SEARCH_DATA, GET_SEARCH_DATA } from "../constants";

export const setSearchData = value => {
  return {
    type: SET_SEARCH_DATA,
    data: {
      totalTemp: value
    }
  };
};

export const getSearchData = () => {
  return {
    type: GET_SEARCH_DATA
  };
};
