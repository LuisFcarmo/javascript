//carregando o express
const express = require('express')
//iniciando o express
const app = express()
//para ser passado o body para os tipos de requisição post
//para poder tratar oque foi enviado no body
app.use(express.urlencoded({extended: true})) // <=

app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method  = "POST">
        nome do cliente: <input type = "text" name = "nome">
        <button>olá mundo</button>
    </form>
    `)
})

//rota/:nome_do_parametro? a interrogação no final significa se é opcional ou não
app.get('/testes/:idUsuarios?', (req, res) => {
    //testes/?chave1=valor1&chave2=valor2 <- essas são as querrys
    res.send(req.params)
    console.log(res.query)
})

app.post('/', (req, res) => {
    console.log(req.body)
    //por isso o nome do input é utilizado porque acessamos ele no body
    res.send(`oque vc me enviou foi ${req.body.nome}`)
})
//querry strings


app.listen(3000, () => {
    console.log("acessar http://localhost:3000")
    console.log("servidor executando na porta 3000")
})