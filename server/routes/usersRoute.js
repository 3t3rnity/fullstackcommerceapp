const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.post("/findall", (req, res) => {});

router.post("/createuser", (req, res) => {
  const user = req.body;
  console.log(user);
  Users.create(user)
    .then((res) => console.log(`USER: ${res}`))
    .catch((err) => console.log(err));
});

router.post("/loginuser", (req, res) => {
  Users.findOne({
    where: {
      /*ИЩУ ПОЛЬЗОВАТЕЛЯ В БД С ТЕМ ЛОГИНОМ И ПАРОЛЕМ, ЧТО ПРИХОДЯТ С ФРОНТА*/
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then((data) => {
      /*ЕСЛИ НАХОЖУ ОТПРАВЛЯЮ ФЛАГ, КОТОРЫЙ НА ФРОНТЕ У МЕНЯ ПРИХОДИТ КАК DATA.LOGGED, А ТАКЖЕ ID ЮЗЕРА, КОТОРОГО Я НАШЕЛ*/
      console.log(`USER: ${data.dataValues.id}`);
      if (data) {
        res.json({
          logged: true,
          id: data.dataValues.id,
        });
      } else {
        res.json({
          logged: false,
        });
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
