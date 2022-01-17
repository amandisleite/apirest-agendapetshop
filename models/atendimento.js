const moment = require('moment')

const conexao = require('../database/connection')

class Atendimento {

    adicionarAtendimento(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 3;

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'data deve ser maior ou igual a data atual'
            }, {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'cliente deve ter pelo menos três caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido);

        const existemErros = erros.length;

        if(existemErros) {
            res.status(400).json(erros)
        } else {
            const atendimentoComData = {...atendimento, dataCriacao, data};
    
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

    listarAtendimento(res) {
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0];

            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(atendimento);
            }
        })
    }
} 

module.exports = new Atendimento;