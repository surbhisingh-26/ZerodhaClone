const {model} =require("mongoose");

const {PositionsModel} = require('../schemas/PositionsSchema')

const PositionsModel =new model ("positions" ,PositionsSchema);

module.exports ={PositionsModel};

