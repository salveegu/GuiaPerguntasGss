const express =  require("express");
const app = express();

app.set('view engine','ejs');//setando a engine que vou consumir para renderizar HTML / a outra que ja utilizei era o Body parser

app.get("/:nome/:sobrenome",(req,res)=>{
   
    var nome = req.params.nome;
    var sobrenome = req.params.sobrenome;
    var exibirMsg = true;
    res.render("index",{

        nome:nome,
        sobrenome: sobrenome,
        linguagem: "JavaScript",
        salario: "R$ 800",
        msg:exibirMsg
    });
});


app.listen(8080,()=>{console.log("Aplicação rodando com sucesso!");});