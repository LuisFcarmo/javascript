import Aluno from "../models/AlunoModels"
class HomeControler {
  async index(req, res){
    const novoaluno = await Aluno.create({
      nome: "pedro",
      sobrenome: "pedrita",
      email: "luis",
      idade: 545345, // Fornecer um valor para o campo 'idade' aqui
      peso: 300,
      altura: 232,
    })
    res.json({
      novoaluno
    })
  }


}

export default new HomeControler()
