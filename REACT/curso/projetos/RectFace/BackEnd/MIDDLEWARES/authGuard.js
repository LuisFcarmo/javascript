const User = require("../MODEL/User")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_PASS

const authGuard = async (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({erros: ["acesso negado!"]});
    }

    try {
        const verified = jwt.verify(token, jwtSecret)
        req.user = await User.findById(verified.id).select("-password");
        return next()
        
    } catch(error) {
        res.status(401).json({erros: ["token incorreto"]});
    }
}

module.exports = authGuard