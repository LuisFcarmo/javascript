import { Sequelize } from "sequelize";
import databaseconfig from '../config/database'
import Aluno from '../models/AlunoModels'
import User from '../models/User.Models'
const models = [Aluno, User];
const connection = new Sequelize(databaseconfig)

models.forEach((model) => {
    model.init(connection)
})