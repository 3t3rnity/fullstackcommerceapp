const Sequelize = require('sequelize')
const db = require('../db/dbConfig')
const Goods = require('./Goods')
const Cart = require('./Cart')
const Users = require('./Users')

const Orders = db.define('Orders',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Cart.hasMany(Orders)

module.exports = Orders