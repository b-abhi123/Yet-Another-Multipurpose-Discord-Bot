const mongoose = require("mongoose");

const emeroldSchema = mongoose.Schema({
    userId: String,
    emerold: { type: Number, default: 100 },
});

module.exports = mongoose.model("Emerolds", emeroldSchema);