const {model} =require("mongoose");

const {OrdersSchema} = require("../schemas/OrdersSchema");

const OrdersModel = new model ("orders",OrdersSchema);

module.exports = { OrdersModel };

const {model} =require("mongoose");

const {HoldingsSchema} = require('../schemas/HoldingsSchema')

const HoldingsModel =new model ("holdings" ,HoldingsSchema);

module.exports ={HoldingsModel};