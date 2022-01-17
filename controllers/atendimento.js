const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.listarAtendimento(res);
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        
        Atendimento.buscaPorId(id, res);
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adicionarAtendimento(atendimento, res);
    
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Atendimento.alteracao(id, valores, res);
    }) 
}