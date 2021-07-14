const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const Goods = require('../models/Goods')
const Order = require('../models/Order')

router.post('/create', (req, res) => {
    let array = []
    req.body.map(el => {
        array.push(el.Cart)
    })
    




})



module.exports = router