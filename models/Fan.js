const mongoose = require("mongoose")
const FanSchema = mongoose.Schema({

fan_type:{
    type: String,
    minLength: 3,
    maxLength: 100
},

model: {
    type:Number,
},

cost: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("fan",FanSchema)