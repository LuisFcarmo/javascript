const express = require("express")
const router = express()

//function with verify array erros
const validate = require("../MIDDLEWARES/handleValidation")
const authGuard = require("../MIDDLEWARES/authGuard")
const {imageUpload} = require("../MIDDLEWARES/imageUpload")

//validations
const { 
    userCreateValidation, 
    userLoginValidation, 
    userUpdateValidation} = require("../MIDDLEWARES/userValidations")

//function model
const { 
    register, 
    login,
    getCurrentUser,
    update,
    getUserById} = require("../CONTROLLER/UserController")


router.post("/register",
    userCreateValidation(), 
    validate, 
    register)

router.post("/login", 
    userLoginValidation(),
    validate,
    login)

router.get("/profile", 
    authGuard, 
    getCurrentUser)

router.put("/", 
    authGuard, 
    userUpdateValidation(), 
    validate, 
    imageUpload.single("profileImage"), 
    update)

router.get("/:id", getUserById)



module.exports = router