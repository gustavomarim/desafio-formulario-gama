const Candidate = require('../Models/Candidate');

module.exports = {
    async register(req, res) {
        // Campos do formulário
        const {
            nome,
            cargoPretendido,
            dataNasc,
            estadoCivil,
            sexo,
            logradouro,
            bairro,
            cidade,
            cpf,
            telefone1,
            telefone2,
            celular,
            contato,
            email,
            identidade,
            cep,
            possuiVeiculo,
            categoriaCNH
        } = req.body;

        const newCandidate = new Candidate();

        // Instanciando campos do formulário
        newCandidate.nome = nome;
        newCandidate.cargoPretendido = cargoPretendido;
        newCandidate.dataNasc = dataNasc;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.sexo = sexo;
        newCandidate.logradouro = logradouro;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.cpf = cpf;
        newCandidate.telefone1 = telefone1;
        newCandidate.telefone2 = telefone2;
        newCandidate.celular = celular;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cep = cep;
        newCandidate.possuiVeiculo = possuiVeiculo;
        newCandidate.categoriaCNH = categoriaCNH;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Deu problema!');
            }

            return res.status(200).send(savedCandidate);
        });
    },
}