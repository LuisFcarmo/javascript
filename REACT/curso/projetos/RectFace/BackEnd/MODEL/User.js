const mongoose = require("mongoose")
const { Schema } = mongoose

//Schema do Model

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String
}, {
    timestamps: true,
})

const User = mongoose.model("user", userSchema);
model.exports = User;