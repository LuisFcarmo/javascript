import { password } from "../config/database"
import User from "../models/User.Models"
class UserController {
    //the complete crud 
    //create
    async store(req, res){
        try {
                const NovoUser = await User.create(req.body)
            return res.json({
                    NovoUser
                })         
        } catch (error) {   
            //exibindo mensagem de erro
            return res.status(400).json({
                erros: error.errors.map((err) => err.message)})
            }   
    }

    //index
    async index (req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (e) {
            return res.json(null);
        }
    }
    //show
    async show (req, res) {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id)
            return res.json(user)
        } catch (e) {
            return res.json(null)
        }
    }
    //update
    async update (req, res) {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({
                errors: ['']
            })
        }
    }
    //delete
}
/*
    ate cinco metodos de controles
    index -> lista todos os usuarios -> GET
    create ou store -> cria um novo usuario -> POST
    delete -> apaga um usuario -> DELETE
    show -> mostra um usuario -> GET
    update -> atualiza um usuario -> PATCH OU PUT
*/


export default new UserController()
