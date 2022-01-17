const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimentos - GET'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adicionarAtendimento(atendimento);
        res.send('você está na rota de atendimentos - POST')
    
    })
}