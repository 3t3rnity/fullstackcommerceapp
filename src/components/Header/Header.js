import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  headerMenuState,
  searchItems,
} from "../../Redux/actionCreators/headerActions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./HeaderAnimations.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexGrow: 1,
    background: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    background: "black",
  },
  link: {
    border: "1px solid white",
    marginRight: "16px",
    padding: "8px 16px",
    color: "white",
  },
  search: {
    width: "40%",
    borderRadius: 5,
  },
}));

export default function ButtonAppBar() {
  const [search, setSearch] = useState("");

  const classes = useStyles();
  const dispatch = useDispatch();
  const server = useSelector((state) => state.app.serverDomen);
  const menuState = useSelector((state) => state.header.menuFlag);
  const menuItems = useSelector((state) => state.header.menuItems);

  const unloggedLinks = (
    <>
      <Link to="/login" className={classes.link}>
        Войти
      </Link>
      <Link to="/registration" className={classes.link}>
        Зарегистрироваться
      </Link>
    </>
  );

  const loggedLinks = (
    <>
      <Link to="/cart" className={classes.link}>
        Корзина
      </Link>
      <Link
        to="/"
        className={classes.link}
        onClick={() => sessionStorage.removeItem("logged")}
      >
        Выход
      </Link>
    </>
  );

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => dispatch(headerMenuState())}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ color: "white" }}>
                Канцтовары
              </Link>
            </Typography>
            <div className={classes.search}>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: 400, borderRadius: 4 }}
              />
              <button onClick={() => dispatch(searchItems(server, search))}>
                Найти
              </button>
            </div>
            {sessionStorage.getItem("logged") && loggedLinks}
            {!sessionStorage.getItem("logged") && unloggedLinks}
          </Toolbar>
        </AppBar>
      </div>
      {menuState && (
        <div className="menuBody">
          <ul>
            {menuItems.map((el, id) => (
              <li key={id}>{el.title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
