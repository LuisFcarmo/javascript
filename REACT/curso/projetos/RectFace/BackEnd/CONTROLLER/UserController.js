//importando as bibliotecas e models usados nesse controller
const User  = require("../MODEL/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_PASS