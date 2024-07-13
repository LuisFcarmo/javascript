const express = require("express")
const router = express()

//rotas da api da aplicação
router.get("/", (req, res) => {
    res.send("API WORKING!")
})





module.exports = router