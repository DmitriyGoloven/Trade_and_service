const {Schema, model} =require("mongoose")


const serviceSchema = new Schema({
    date: {type: String, default: new Date().toLocaleString()},
    email: {type:String, required: true},
    phone: {type: String, required: true},
    service: {type: String, required: true},
    name: {type: String, default: "no name"},

})

module.exports = model("Service", serviceSchema )