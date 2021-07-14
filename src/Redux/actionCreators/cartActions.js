import {
  FETCH_CART,
  ADD_CART,
  DELETE_GOOD,
  DELETE_ALL,
  CREATE_ORDER,
  UPDATE_GOOD,
} from "../actionTypes/cartTypes";
import axios from "axios";

export const cartFetch = (server) => {
  return async (dispatch) => {
    const res = await axios.post(`${server}cart/fetch`, {
      id: sessionStorage.getItem("ID"),
    });
    const payload = res.data.GOODS;
    let pricef = 0;
    payload.map((el, id) => {
      payload[id].count = el.Cart.count;
    });
    res.data.GOODS.map((el) => {
      pricef += el.price;
    });
    dispatch({
      type: FETCH_CART,
      payload,
      pricef,
    });
  };
};

export const deleteGood = (server, goodId, mapId) => {
  return async (dispatch) => {
    let price = 0;
    let res = await axios.post(`${server}cart/delete`, {
      userId: sessionStorage.getItem("ID"),
      goodId,
    });
    price = res.data.GOODS[mapId].price;
    dispatch({
      type: DELETE_GOOD,
      goodId,
      price,
    });
  };
};

export const updateGood = (server, goodId, value, mapId) => {
  return async (dispatch) => {
    let res = await axios.post(`${server}cart/update`, {
      userId: sessionStorage.getItem("ID"),
      goodId,
      value,
    });
    const payload = res;
    console.log(payload);
    dispatch({
      type: UPDATE_GOOD,
      payload,
    });
  };
};

export const deleteAllGoods = (server) => {
  axios.post(`${server}cart/deleteall`, {
    userId: sessionStorage.getItem("ID"),
  });

  return {
    type: DELETE_ALL,
  };
};

export const addToCart = (server, goodsId, count) => {
  return async (dispatch) => {
    const res = await axios.post(`${server}cart/create`, {
      id: sessionStorage.getItem("ID"),
      goodsId,
      count,
    });
    const payload = res.data.GOODS;
    dispatch({
      type: ADD_CART,
      payload,
    });
  };
};

export const createOrder = (server, cart) => {
  return async (dispatch) => {
    const res = await axios.post(`${server}order/create`, cart);
    const payload = res.data;
    console.log(payload);
    dispatch({
      type: CREATE_ORDER,
    });
  };
};
