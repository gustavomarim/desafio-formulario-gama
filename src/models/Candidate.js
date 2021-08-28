const mongoose = require('mongoose');

// Adicionar os campos do Form
const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    gender: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true }
}, {
    timestamps: true
});
module.exports = mongoose.model('Candidate', CandidateSchema);

/*
            nome,
            cargoPretendido,
            dataNasc,
            estadoCivil,
            sexo,
            endereco,
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
             */