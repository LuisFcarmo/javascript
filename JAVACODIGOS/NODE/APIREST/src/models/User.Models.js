import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs'
//configurando o modelo do model que vai representar o aluno
export default class User extends Model {
    //este init pode ser visto como o constructor das classes
    //mas ele cria o dado na base de dados
    static init(sequelize) {
        super.init({    
            nome: {
                type: Sequelize.STRING, 
                defaultValue: '',
                validate: {
                   len: {
                        args: [4, 30],
                        msg: 'campo nome deve ter entre 4 e 30 caracteres'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                 msg: "email já existe",       
                },
                validade: {
                    isEmail: {
                        msg: "email invalido"
                    }
                }
            },
            password_hash : {
                type: Sequelize.STRING,
            },
            //campo virtual que n esxiste na base de dados
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [4, 50],
                        msg: 'a senha deve ter entre 6 e 50 caracteres'
                    }
                }
            }
        }, {
            sequelize,
        });
        //fazendo o hash do password
        this.addHook('beforeSave', async (user) => {
            if(user.password){
                user.password_hash = await bcryptjs.hash(user.password, 8)
            }
        });
        return this;
    }

    async passwordIsValid (password) {
        return bcryptjs.compare(password, this.password_hash)
    }
}