const conexao = require('../database/connection')

class Servico {

    adicionarServico(servico, res) {
        const servicoEhValido = servico.nomeServico.length >= 3;
        const precoEhValido = servico.preco.length >= 4;

        const validacao = [{
                nome: 'nomeServico',
                valido: servicoEhValido,
                mensagem: 'serviço deve ter pelo menos três caracteres'
            }, {
                nome: 'preco',
                valido: precoEhValido,
                mensagem: 'preço deve ter pelo menos quatro caracteres'
            }]

        const erros = validacao.filter(campo => !campo.valido);

        const existemErros = erros.length;

        if(existemErros) {
            res.status(400).json(erros)
        } else {
   
            const sql = 'INSERT INTO Servicos SET ?';
    
            conexao.query(sql, servico, (erro, resultados) => {
                if(erro) {
                res.status(400).json(erro)
                } else {
                res.status(201).json(servico)
                }
            })
        }

    }  

    listarServico(res) {
        const sql = 'SELECT * FROM Servicos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

}

module.exports = new Servico;