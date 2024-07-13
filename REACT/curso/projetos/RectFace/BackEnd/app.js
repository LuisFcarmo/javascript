require("dotenv").config()
const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();
//Solve cors
app.use(cors({credentials:true, origin: "https://localhost:3000"}))

//upload de imagens
app.use("/uploads", express.static(path.join(__dirname, "./uploads")))

//roustes
const router = require("./ROUTES/Router")

//db connection
require("./config/db.js")

app.use(router)

app.use(express.json())
app.use(express.urlencoded({extended:  false}))
app.listen(port, () => {
    console.log(`app rodando na porta http://localhost:${port}/`)
})