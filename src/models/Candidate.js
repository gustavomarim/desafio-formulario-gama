const mongoose = require('mongoose');

// Adicionar os campos do Form
const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargoPretendido: { type: String, unique: false, required: false },
    dataNasc: { type: String, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: false },
    sexo: { type: String, unique: false, required: false },
    endereco: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    telefone1: { type: String, unique: false, required: false },
    telefone2: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: false },
    contato: { type: String, unique: false, required: false },
    email: { type: String, unique: true, required: true },
    identidade: { type: String, unique: true, required: false },
    identidade: { type: String, unique: true, required: false },
    cep: { type: String, unique: false, required: true },
    possuiVeiculo: { type: String, unique: false, required: false },
    categoriaCNH: { type: String, unique: false, required: false }
}, {
    timestamps: true
});
module.exports = mongoose.model('Candidate', CandidateSchema);

/*
            nome,
            cargoPretendido,
            dataNasc required,
            estadoCivil,
            sexo,
            endereco required,
            bairro required,
            cidade required,
            cpf required,
            telefone1,
            telefone2,
            celular,
            contato,
            email,
            identidade,
            cep required,
            possuiVeiculo,
            categoriaCNH
             */