import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cartFetch,
  deleteGood,
  deleteAllGoods,
  createOrder,
  updateGood,
} from "../../Redux/actionCreators/cartActions";
import { Button } from "@material-ui/core";
import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const test = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const server = useSelector((state) => state.app.serverDomen);

  useEffect(() => {
    dispatch(cartFetch(server));
  }, []);

  return (
    <>
      <h1>Корзина товаров</h1>
      <div className="cart-root">
        <div className="cart-list">
          {cart &&
            cart.map((el, mapId) => (
              <div key={mapId} className="cart-list__item">
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <div className="cart-list__item-button-group">
                  <div>
                    <span>Цена {el.price} rub </span>
                    <span>
                      <button
                        onClick={() =>
                          dispatch(updateGood(server, el.Cart.id, -1, mapId))
                        }
                      >
                        -
                      </button>{" "}
                      Кол-во {el.count} шт.
                      <button
                        onClick={() => {
                          cart[mapId].Cart.count += 1;
                          dispatch(updateGood(server, el.Cart.id, 1, mapId));
                        }}
                      >
                        +
                      </button>
                    </span>
                  </div>
                  <Button
                    style={{ border: "1px solid black" }}
                    onClick={() => dispatch(deleteGood(server, el.id, mapId))}
                  >
                    Удалить!
                  </Button>
                </div>
              </div>
            ))}
        </div>
        <div className="cart-sidebar">
          <div className="cart-sidebar__price">
            <h3>Сумма: {totalPrice} rub</h3>
          </div>
          <div className="cart-sidebar__button-group">
            <Button
              style={{ border: "1px solid black" }}
              onClick={() => dispatch(createOrder(server, cart))}
            >
              Заказ
            </Button>
            <Button
              style={{ border: "1px solid black" }}
              onClick={() => dispatch(deleteAllGoods(server))}
            >
              Удалить
            </Button>
            <Button
              style={{ border: "1px solid black" }}
              onClick={() => console.log(test)}
            >
              TEST
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
