const mongoose = require("mongoose");

const diemondSchema = mongoose.Schema({
    userId: String,
    diemonds: { type: Number, default: 100 },
});

module.exports = mongoose.model("Diemonds", diemondSchema);