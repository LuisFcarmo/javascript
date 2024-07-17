const express = require("express");
const router = express.Router();

//controller
const { 
    registerFoto, 
    removeFoto, 
    getAllfoto, 
    getAllFotosCurrentUser, 
    getAllFotosById,
    getFotoById,
    updateFoto,
    likefoto,
    ComentFoto,
    SearchFoto} = require("../CONTROLLER/FotoController");

//Middlewares
const { photoInsertValidation, photoUpdateValidation, ComentValidation } = require("../MIDDLEWARES/FotoValidation");
const  authGuard  = require("../MIDDLEWARES/authGuard");
const  validate  = require("../MIDDLEWARES/handleValidation");
const { imageUpload } = require("../MIDDLEWARES/imageUpload");

//Routes
router.post("/register", 
    authGuard, 
    imageUpload.single("image"), 
    photoInsertValidation(),
    validate, 
    registerFoto)

router.put("/update/:id",
    authGuard,
    photoUpdateValidation(),
    validate,
    updateFoto)

router.put("/like/:id",
    authGuard,
    validate,
    likefoto
)    
    
router.put("/coment/:id",
    authGuard,
    ComentValidation(),
    validate,
    ComentFoto,
)

router.delete("/:id", 
    authGuard, 
    validate, 
    removeFoto)

router.get("/",
    authGuard,
    validate,
    getAllfoto)

router.get("/getAllFotosCurrentUser",
    authGuard,
    validate,
    getAllFotosCurrentUser)

router.get("/user/:id", 
    authGuard,
    validate,
    getAllFotosById)

router.get("/foto/:id",
    getFotoById)

router.get("/search",
    authGuard,
    validate,
    SearchFoto,
)
    
module.exports = router;