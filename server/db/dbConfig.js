const Sequelize = require('sequelize')
module.exports = new Sequelize('officeshop', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
})