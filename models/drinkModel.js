const mongoose = require("mongoose");

const drinkSchemma = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mainIngredient: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Drink", drinkSchemma);