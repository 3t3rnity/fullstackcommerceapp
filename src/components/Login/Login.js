import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/actionCreators/usersActions";
import {
  Input,
  FormControl,
  FormHelperText,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "32px",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const server = useSelector((state) => state.app.serverDomen);
  const test = useSelector((state) => state.users.test);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1>{test}</h1>
        <FormControl className={classes.createGoodItem}>
          <Input
            type="text"
            onChange={(e) => {
              user.email = e.target.value;
            }}
          />
          <FormHelperText>Почта</FormHelperText>
        </FormControl>
        <FormControl className={classes.createGoodItem}>
          <Input
            type="text"
            onChange={(e) => {
              user.password = e.target.value;
            }}
          />
          <FormHelperText>Пароль</FormHelperText>
        </FormControl>
        <Button
          onClick={() => dispatch(loginUser(user, server))}
          color="primary"
        >
          Check!
        </Button>
      </div>
    </div>
  );
};

export default Login;
