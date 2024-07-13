const mongoose = require("mongoose")
const { Schema } = mongoose

const imageSchema = new Schema ({
        image: String,
        title: String,
        likes: Array,
        coments: Array,
        userId: mongoose.ObjectId,
        userName: String
    }, {
        timestamps: true,
    }
)

const Photo = mongoose.model(imageSchema)

module.exports = Photo