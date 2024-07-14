const { body } = require("express-validator")


const photoInsertValidation = () => {
    return [
        body("title")
            .not().equals("undefined").withMessage("o titulo é obrigatorio")
            .isString().withMessage("o titulo é obrigatorio")
            .isLength({min: 5, max: 20}).withMessage("o titulo deve ter no minimo 5 caracteres e no maximo 20")
        ,
        body("image")
            .custom((value, {req}) => {
                if(!req.file) {
                    throw new Error("A imagem deve ser obrigatoria")
                }
                return true;
            }),
    ]
}

const photoUpdateValidation = () => {
    return [
        body("title")
        .optional()
        .isString().withMessage("o titulo é obrigatorio")
        .isLength({min: 5, max: 20}).withMessage("o titulo deve ter no minimo 5 caracteres e no maximo 20")
    ]
}

const ComentValidation = () => {
    return [
        body("coment")
        .not().equals("undefined").withMessage("o comentario é obrigatorio")
        .isString().withMessage("o comentario é obrigatorio")
        .isLength({min: 2, max: 30}).withMessage("o comentario deve ter no minimo 2 caracteres e no maximo 30")
    ]
}
module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    ComentValidation,
}
