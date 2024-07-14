const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
            .isString().withMessage("o nome é obrigatório!")
            .isLength({ min: 3, max: 20 }).withMessage("o nome deve conter no mínimo 3 caracteres e no máximo 20"),
        
        body("email")
            .isString().withMessage("o email é obrigatório")
            .isEmail().withMessage("você deve fornecer um email válido"),
        
        body("password")
            .isString().withMessage("o campo de senha é obrigatório")
            .isLength({ min: 5, max: 20 }).withMessage("a senha deve ter no mínimo 5 caracteres e no máximo 20"),
    
        body("confirmpassword")
            .isString().withMessage("a confirmação de senha é obrigatória")
            .custom((value, { req }) => {
                if (value != req.body.password) {
                    throw new Error("as senhas não coincidem");
                }
                return true;
            })
    ]    
}

const userLoginValidation = () => {
    return [
        body("email")
            .isString().withMessage("o email é obrigatorio")
            .isEmail().withMessage("insira um email valido"),
        body("password")
            .isString().withMessage("o campo senha é obrigatorio")
    ]
}

const userUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({ min: 3, max: 20 }).withMessage("o nome deve conter no mínimo 3 caracteres e no máximo 20"),
        body("password")
            .optional()
            .isLength({ min: 5, max: 20 }).withMessage("a senha deve ter no mínimo 5 caracteres e no máximo 20"),
    ]
}

module.exports = {
    userCreateValidation,
    userLoginValidation,
    userUpdateValidation
}
