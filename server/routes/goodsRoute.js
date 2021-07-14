const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Goods = require("../models/Goods");
const Provider = require("../models/Provider");

router.post("/find", (req, res) => {
  Goods.findAll({ group: "price" })
    .then((data) => {
      res.json({
        data,
      });
    })
    .catch((err) => console.log(err));
});

router.post("/find/:type", (req, res) => {
  const type = req.params.type;
  Goods.findAll({ where: { type }, raw: true })
    .then((data) => {
      res.json({
        data,
      });
    })
    .catch((err) => console.log(err));
});

router.post("/search", (req, res) => {
  Goods.findAll({
    where: { title: { [Op.startsWith]: req.body.name } },
  }).then((data) => res.json({ data }));
});

router.get("/createTest", (req, res) => {
  Provider.create({
    title: "test",
    description: "test-descr",
  });
});

router.post("/create", (req, res) => {
  console.log(req.query.provider);
  const filePath = `${req.file.destination}\/${req.file.filename}`;
  Provider.findOne({ where: { title: req.query.provider } }).then((data) => {
    Goods.create({
      type: req.query.type,
      title: req.query.title,
      price: req.query.price,
      ProviderId: data.dataValues.id,
      image: filePath,
    });
  });
});

module.exports = router;
