import User from '../models/User.Models'
import jwt from 'jsonwebtoken'

class TokenController {
    async store (req, res) {
        const { email = '', password = ''} = req.body;
        if(!email || !password) {
            return res.status(401).json({
                errors: ["Credências invalidas"]
            })
        }
        const user = await User.findOne({
            where: {email}
        })

        if(!user) {
            return res.status(401).json({
                errors: ["usuario não existe"]
            })
        }

        if(!(await user.passwordIsValid(password))) {
            return res.status(401).json({
                erros: ["senha invalida"]
            })
        }
        const {id} = user
        //dados que poderam ser resgatados deste token
        const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION
        });
        //
        return res.json({token})
    }
}

export default new TokenController();