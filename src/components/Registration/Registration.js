import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Redux/actionCreators/usersActions";
import {
  Select,
  InputLabel,
  Input,
  FormControl,
  FormHelperText,
  Button,
  makeStyles,
} from "@material-ui/core";
import "./Registration.scss";

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

const Registration = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const server = useSelector((state) => state.app.serverDomen);
  const test = useSelector((state) => state.users.test);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1>Регистрация</h1>
        <FormControl className={classes.createGoodItem}>
          <Input
            type="text"
            onChange={(e) => {
              user.firstName = e.target.value;
            }}
          />
          <FormHelperText>Имя</FormHelperText>
        </FormControl>
        <FormControl className={classes.createGoodItem}>
          <Input
            type="text"
            onChange={(e) => {
              user.lastName = e.target.value;
            }}
          />
          <FormHelperText>Фамилия</FormHelperText>
        </FormControl>
        <FormControl className={classes.createGoodItem}>
          <Input
            type="text"
            onChange={(e) => {
              user.fatherName = e.target.value;
            }}
          />
          <FormHelperText>Отчество</FormHelperText>
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
        <FormControl className={classes.createGoodItem}>
          <Input
            type="text"
            onChange={(e) => {
              user.telephone = e.target.value;
            }}
          />
          <FormHelperText>Телефон</FormHelperText>
        </FormControl>
        <FormControl className={classes.createGoodItem}>
          <Input
            type="text"
            onChange={(e) => {
              user.email = e.target.value;
            }}
          />
          <FormHelperText>email</FormHelperText>
        </FormControl>
        <Button
          onClick={() => dispatch(createUser(user, server))}
          color="primary"
        >
          Check!
        </Button>
      </div>
    </div>
  );
};

export default Registration;
