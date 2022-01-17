const moment = require('moment')

const conexao = require('../database/connection')

class Atendimento {

    adicionarAtendimento(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const atendimentoComData = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?';

        conexao.query(sql, atendimentoComData, (erro, resultados) => {
            if(erro) {
            res.status(400).json(erro)
            } else {
            res.status(201).json(resultados)
            }
        })
    }  
} 

module.exports = new Atendimento;