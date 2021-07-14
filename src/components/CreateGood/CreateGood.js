import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  Input,
  FormControl,
  FormHelperText,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid black",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createGoodItem: {
    margin: "0 40px",
  },
}));

const CreateGood = () => {
  const [file, setFile] = useState();
  const [good] = useState({
    type: "pen",
    title: "",
    price: "",
    provider: "",
  });
  const server = useSelector((state) => state.app.serverDomen);

  const classes = useStyles();

  const uploadFile = () => {
    const fd = new FormData();
    fd.append("filedata", file);
    axios
      .post(`${server}goods/create`, fd, {
        params: good,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className={classes.root}>
      <div className={classes.createGood}>
        <div className={classes.content}>
          <Link to="/">Pora domoy</Link>
          <input
            type="file"
            name="filename"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <FormControl>
            <Select
              onChange={(e) => (good.type = e.target.value)}
              inputProps={{ id: "goods-select" }}
            >
              <option value="pen">Ручка</option>
              <option value="pencil">Карандаш</option>
              <option value="notebook">Тетрадь</option>
            </Select>
            <FormHelperText>Выберите тип товара</FormHelperText>
          </FormControl>
          <FormControl className={classes.createGoodItem}>
            <Input
              type="text"
              onChange={(e) => (good.title = e.target.value)}
            />
            <FormHelperText>Введите название товара</FormHelperText>
          </FormControl>
          <FormControl className={classes.createGoodItem}>
            <Input
              type="text"
              onChange={(e) => (good.price = e.target.value)}
            />
            <FormHelperText>Введите цену товара</FormHelperText>
          </FormControl>
          <FormControl className={classes.createGoodItem}>
            <Input
              type="text"
              onChange={(e) => (good.provider = e.target.value)}
            />
            <FormHelperText>Название поставщика</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" onClick={uploadFile}>
            Click
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              axios.post(`http://localhost:4000/`).then((res) => {
                console.log(res);
              });
            }}
          >
            Запрос на создание таблицы
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              axios.post(`http://localhost:4000/cross`).then((res) => {
                console.log(res);
              });
            }}
          >
            Перекрестный запрос
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateGood;
