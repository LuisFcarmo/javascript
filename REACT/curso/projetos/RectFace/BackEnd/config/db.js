const mongoose = require("mongoose")
const dbUser = process.env.DB_USER;
const dbPassord = process.env.DB_PASSWORD

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassord}@cluster0.kpr6ma5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
            console.log("conectei")
            return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn();
module.exports = conn;