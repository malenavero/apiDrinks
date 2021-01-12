const mongoose = require("mongoose");

const userSchemma = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    favDrink: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchemma);