const Servico = require('../models/servico');

module.exports = app => {
    app.get('/servicos', (req, res) => {
        Servico.listarServico(res);
    })

    app.post('/servicos', (req, res) => {
        const servico = req.body;
        Servico.adicionarServico(servico, res);
    
    })
}