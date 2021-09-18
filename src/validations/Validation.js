import * as yup from 'yup';

const schema = yup.object().shape({
    nome: yup.string('Digite um nome válido').required('Campo obrigatório'),
    cargoPretendido: yup.string('Digite um cargo válido').required('Campo obrigatório'),
    dataNasc: yup.string().required('Campo obrigatório'),
    estadoCivil: yup.string(),
    sexo: yup.string(),
    logradouro: yup.string().required('Campo obrigatório'),
    bairro: yup.string().required('Campo obrigatório'),
    cidade: yup.string('Digite uma cidade válida').required('Campo obrigatório'),
    cpf: yup.string().required('Campo obrigatório'),
    telefone1: yup.string(),
    telefone2: yup.string(),
    celular: yup.string().required('Campo obrigatório'),
    contato: yup.string('Digite um nome de contato válido'),
    email: yup.string('Digite um e-mail válido')
        .email('Digite um email no padrão: exemplo@email.com').required('Campo Obrigatório'),
    identidade: yup.string().min(9, 'Digite um número de RG válido').max(9, 'Digite um número de RG válido'),
    cep: yup.string().required('Campo obrigatório'),
    possuiVeiculo: yup.string(),
    categoriaCNH: yup.string(),
});

export default schema;