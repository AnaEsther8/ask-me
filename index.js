const express= require ('express')
const app = express()
const bodyparser = require ('body-parser')
const port= 3000

app.set('view engine' , 'ejs')
app.use(express.static('public'))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get('/', (req,res) =>{
    //SELECT * FROM pergunta
    Pergunta.findAll({raw: true , order: [
        ['id', 'DESC']
    ]}).then(perguntas =>{
        res.render('index',{
            perguntas: perguntas
        })
    })
})


app.get('/*perguntar' , (req, res ) =>{
    res.render('perguntar')
})
app.post('/salvarpergunta' , (req , res) =>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    res.send(`Titulo : ${titulo} / Descrição: ${descricao}`)
})

app.listen(port, (erro) =>{
    if (erro){
        console.log("Erro ao iniciar o servidor")
    }else{
      console.log(`Servidor rodando em http://localhost:${port}`)
   }
})