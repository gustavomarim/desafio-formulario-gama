import * as yup from 'yup';

const schema = yup.object().shape({
    nome: yup.string('Digite um nome válido').required('Campo obrigatório'),
    cargoPretendido: yup.string('Digite um cargo válido').required('Campo obrigatório'),
    dataNasc: yup.string(),
    estadoCivil: yup.string(),
    sexo: yup.string(),
    logradouro: yup.string().required('Campo obrigatório'),
    bairro: yup.string().required('Campo obrigatório'),
    cidade: yup.string('Digite uma cidade válida').min(2, 'Cidade precisa de no mínimo 2 caracteres').required('Campo obrigatório'),
    cpf: yup.string().matches(/^(\d{3}){2}\d{3}\d{2}$/, 'Digite um CPF válido').required('Campo obrigatório'),
    telefone1: yup.string().min(8, 'Digite um número de celular válido').max(10, 'Digite um número de telefone válido'),
    telefone2: yup.string().min(8, 'Digite um número de celular válido').max(10, 'Digite um número de telefone válido'),
    celular: yup.string().min(9, 'Digite um número de celular válido').max(11, 'Digite um número de celular válido').required('Campo obrigatório'),
    contato: yup.string('Digite um nome de contato válido'),
    email: yup.string('Digite um e-mail válido')
        .email('Digite um email no padrão: exemplo@email.com').required('Campo Obrigatório'),
    identidade: yup.string().min(9, 'Digite um número de RG válido').max(9, 'Digite um número de RG válido'),
    cep: yup.string().required('Campo Obrigatório'),
    possuiVeiculo: yup.string(),
    categoriaCNH: yup.string(),
});

export default schema;