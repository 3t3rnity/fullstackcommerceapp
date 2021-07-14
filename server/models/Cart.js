const Sequelize = require('sequelize')
const Users = require('../models/Users')
const Goods = require('../models/Goods')
const db = require('../db/dbConfig')

const Cart = db.define('Cart',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})  

Users.belongsToMany(Goods, {through: Cart})
Goods.belongsToMany(Users, {through: Cart})





module.exports = Cart