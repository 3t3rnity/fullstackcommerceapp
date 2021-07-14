import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { rootReducer } from "./Redux/reducers/rootreducer";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "semantic-ui-css/semantic.min.css";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
