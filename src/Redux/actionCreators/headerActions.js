import { MENU_STATE, SEARCH_ITEMS } from "../actionTypes/headerTypes";
import axios from "axios";

export const headerMenuState = () => ({
  type: MENU_STATE,
});

export const searchItems = (server, query) => {
  return async (dispatch) => {
    const res = await axios.post(`${server}goods/search`, {
      name: query,
    });
    dispatch({
      type: SEARCH_ITEMS,
      payload: res.data,
    });
  };
};
