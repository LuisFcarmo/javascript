import Sequelize, { Model } from 'sequelize';
//configurando o modelo do model que vai representar o aluno
export default class Aluno extends Model {
    static init(sequelize) {
        super.init({    
            nome: Sequelize.STRING,
            sobrenome: Sequelize.STRING,
            email: Sequelize.STRING,
            idade: Sequelize.FLOAT,
            peso: Sequelize.FLOAT,
            altura: Sequelize.FLOAT,
        }, {
            sequelize,
        });
        return this;
    }
}