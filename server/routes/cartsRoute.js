const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Users = require("../models/Users");
const Goods = require("../models/Goods");

router.post("/create", (req, res) => {
  Users.findOne({ where: { id: req.body.id } }).then((USER) => {
    Goods.findOne({ where: { id: req.body.goodsId } }).then((GOOD) => {
      USER.addGoods(GOOD, { through: { count: req.body.count } }).then(
        (CREATED) => {
          USER.getGoods().then((GOODS) => res.json({ GOODS }));
        }
      );
    });
  });
});

router.post("/fetch", (req, res) => {
  Users.findOne({ where: { id: req.body.id } }).then((USER) => {
    USER.getGoods().then((GOODS) => {
      res.json({ GOODS });
    });
  });
});

router.post("/update", (req, res) => {
  console.log(req.body);
  console.log("//////////UPD////////////");
  Users.findOne({ where: { id: req.body.userId } }).then((USER) => {
    Cart.findOne({ where: { id: req.body.goodId } }).then((data) => {
      const value = data.dataValues.count;
      console.log(value);
      if (value === 0 && req.body.value === -1) {
        res.json({ msg: "error" });
      } else {
        Cart.update(
          { count: value + req.body.value },
          { where: { id: req.body.goodId } }
        );
      }
    });
  });
});

router.post("/delete", (req, res) => {
  console.log("/////////////////////////////////////");
  Users.findOne({ where: { id: req.body.userId } }).then((USER) => {
    USER.getGoods().then((GOODS) => {
      res.json({ GOODS });
      Cart.destroy({
        where: {
          UserId: req.body.userId,
          GoodId: req.body.goodId,
        },
      });
    });
  });
});

router.post("/deleteall", (req, res) => {
  Cart.destroy({
    where: {
      UserId: req.body.userId,
    },
  });
});

module.exports = router;
