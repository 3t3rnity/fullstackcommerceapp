import { FETCH_PRODUCTS, CHANGE_PRODUCTS } from "../actionTypes/mainPageTypes";
import { SEARCH_ITEMS } from "../actionTypes/headerTypes";

const initialState = {
  sidemenuItems: [
    { title: "Главная", url: "/goods/find" },
    { title: "Ручки", url: "/goods/find/pen" },
    { title: "Карандаши", url: "/goods/find/pencil" },
    { title: "Тетради", url: "/goods/find/notebook" },
    { title: "Прочая канцелярия", url: "/goods/find" },
  ],
  post: null,
  currentRoute: "/goods/find",
  msg: "posts",
};

export const mainpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCTS:
      return { ...state, currentRoute: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, post: action.payload, msg: action.route };
    case SEARCH_ITEMS:
      return { ...state, post: action.payload };
    default:
      return state;
  }
};
