const express = require("express")
const router = express()
//midlewares 

//servindo minha rotas de usuario para aplicação
router.use("/api/users", require("./UserRoutes"))
router.use("/api/fotos", require("./FotoRoutes"))

//rotas da api da aplicação
router.get("/", (req, res) => {
    res.send("API WORKING!")
})


module.exports = router