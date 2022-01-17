const customExpress = require("./config/customExpress")

const conexao = require("./database/connection")

conexao.connect((err) => {
    if(err) {
        console.log('deu erro')
    } else {
        console.log('database conectada')
        const app = customExpress();
        
        app.listen(3000, () => console.log("servidor rodando na porta 3000"))
    }
})

