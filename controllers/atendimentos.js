const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) =>
        res.send('Servidor rodando, tudo okay! Você está na rota de atendimentos e está realizando um GET'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        res.send('POST atendimento')
    })

}