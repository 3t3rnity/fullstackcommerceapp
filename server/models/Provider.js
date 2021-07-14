const Sequelize = require("sequelize");
const db = require("../db/dbConfig");

const Goods = require("../models/Goods");

const Provider = db.define(
  "Provider",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Provider.hasMany(Goods);

module.exports = Provider;
