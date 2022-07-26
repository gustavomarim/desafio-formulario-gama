import './App.css';
import { useEffect, useState } from 'react';

// import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from './components/form/InputText';
import Select from './components/form/InputSelect';
import InputFile from './components/form/InputFile';
import RadioButton from './components/form/RadioButton';
import Checkbox from './components/form/Checkbox';
import InputDate from './components/form/InputDate';
import AlertComponent from './components/alert/AlertComponent';
import BtnSend from './components/button/BtnSend';

import useForm from './hooks/useForm';
import schema from './hooks/FormValidation';

import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// inicializar server = nodemon server.js

const optionCnhCategory = ['A', 'B', 'C', 'D', 'E'];
const optionGender = ['Masculino', 'Feminino'];
const optionMaritalStatus = ['Casado', 'Divorciado', 'Separado', 'Solteiro', 'Viúvo'];
const optionVehicle = ['Sim', 'Não'];

function App() {
  const nome = useForm('stringOnly');
  const cargo = useForm();
  const dataNascimento = useForm();
  const estadoCivil = useForm();
  const sexo = useForm();
  const cep = useForm('cep');
  const endereco = useForm();
  const bairro = useForm();
  const cidade = useForm('stringOnly');
  const estado = useForm('stringOnly');
  const telefone1 = useForm();
  const telefone2 = useForm();
  const celular = useForm();
  const email = useForm('email');
  const rg = useForm();
  const cpf = useForm('cpf');
  const possuiVeiculo = useForm();
  const categoriaCNH = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (nome.validate() && cep.validate() && cidade.validate() && estado.validate() && email.validate() && cpf.validate()) {
      console.log('Enviar');
      return <AlertComponent variant="success" message="Cadastro Realizado com sucesso!" />
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <Input
          label="Nome"
          id="nome"
          type="text"
          textDescription="Digite seu nome completo."
          {...nome}
        />

        <Input
          id="Cargo"
          type="text"
          label="Cargo Desejado"
          textDescription="Digite seu cargo pretendido."
          {...cargo}
        />

        <InputDate
          id="dataNascimento"
          label="Data de Nascimento"
          {...dataNascimento}
        />

        <Select
          id="estadoCivil"
          name="estado civil"
          options={optionMaritalStatus}
          {...estadoCivil}
        />

        <Select
          id="Sexo"
          name="sexo"
          options={optionGender}
          {...sexo}
        />

        <Input
          label="CEP"
          id="cep"
          type="text"
          placeholder="00000-000"
          textDescription="Digite seu CEP."
          {...cep}
        />

        <Input
          label="Endereço"
          id="logradouro"
          type="text"
          textDescription="Digite seu endereço residencial."
          {...endereco}
        />

        <Input
          label="Bairro"
          id="bairro"
          type="text"
          textDescription="Digite seu bairro."
          {...bairro}
        />

        <Input
          label="Cidade"
          id="cidade"
          type="text"
          textDescription="Digite a cidade onde você mora."
          {...cidade}
        />

        <Input
          label="Estado"
          id="estado"
          type="text"
          textDescription="Digite o Estado onde você mora."
          {...estado}
        />

        <Input
          label="Telefone Fixo 1"
          id="telefone1"
          type="text"
          placeholder="(00) 0000-0000"
          textDescription="Digite um número para contato."
          {...telefone1}
        />

        <Input
          label="Telefone Fixo 2"
          id="telefone2"
          type="text"
          placeholder="(00) 0000-0000"
          textDescription="Número opcional para contato."
          {...telefone2}
        />

        <Input
          label="celular"
          id="celular"
          type="text"
          placeholder="(00) 0 0000-0000"
          textDescription="Digite um celular para contato."
          {...celular}
        />

        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="name@example.com"
          textDescription="Digite seu e-mail."
          {...email}
        />

        <Input
          label="RG"
          id="identidade"
          type="text"
          placeholder="00.000.000-0"
          textDescription="Digite o número do seu RG."
          {...rg}
        />

        <Input
          label="CPF"
          id="cpf"
          type="text"
          placeholder="000.000.000-00"
          textDescription="Digite o seu CPF."
          {...cpf}
        />

        <Select
          id="veiculo"
          name="Possui Veículo"
          options={optionVehicle}
          {...possuiVeiculo}
        />

        <Select
          id="categoriaCNH"
          name="Categoria CNH"
          options={optionCnhCategory}
          {...categoriaCNH}
        />

        {/* <InputFile textDescription="Anexe seu currículo." />

        <Checkbox label="Aceito os termos e condições." feedback="Você deve aceitar os termos antes de enviar o formulário" /> */}

        <BtnSend
          id="btnEnviar"
          name="Cadastrar Perfil"
        />
      </Form >
    </>
  );
}

export default App;

// function onSubmit(data) {
  //   try {
  //     setFormValues(data);
  //     createCandidate();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const fetchAddress = async () => {
  //   const address = await axios.get(`https://viacep.com.br/ws/${formValues.cep}/json`);
  //   const array = convertToArray(formValues.cep);
  //   setEvents(array);
  //   setFormValues({
  //     ...formValues,
  //     cidade: `${address.data.localidade}, ${address.data.uf}`,
  //     logradouro: address.data.logradouro,
  //     bairro: address.data.bairro
  //   });
  // };

  // const createCandidate = async () => {
  //   console.log('você está no createCandidate');
  //   try {
  //     const user = await axios.post('http://localhost:3001/register', formValues);
  //     if (user.status === 200) {
  //       alert('Cadastro realizado com sucesso!');
  //       console.log('Requisição POST realizada com Sucesso!');
  //     }
  //   } catch (error) {
  //     alert('Cadastro não realizado!');
  //     console.log('Requisição POST negada!');
  //   }
  // }

  // const { register, handleSubmit, formState: { errors } } = useForm({
  //   resolver: yupResolver(schema)
  // });

  // const onSubmit = data => console.log(data);


// <div id="main-container" onSubmit={handleSubmit(onSubmit)} >
//   <h1>Cadastro de Currículo - JobsNET</h1>

//   <form id="register-form">

//     <div className="half-box" >
//       <label htmlFor="nome">Nome</label>
//       <input {...register("nome")}
//         placeholder="Digite seu nome completo"
//         onChange={(e) => {
//           setFormValues({ ...formValues, nome: e.target.value })
//         }}
//       />
//       <p>{errors?.nome?.message}</p>
//     </div>

//     <div className="half-box" >
//       <label htmlFor="cargo" >Cargo Pretendido</label>
//       <input
//         placeholder="Digite o cargo que deseja se candidatar"
//         {...register("cargoPretendido")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, cargoPretendido: e.target.value })
//         }}
//       />
//       <p>{errors?.cargoPretendido?.message}</p>
//     </div>

//     <div className="dataNascimento">
//       <label htmlFor="nascimento">Data de Nascimento</label>
//       <input type="date"
//         {...register("dataNascimento")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, dataNascimento: e.target.value })
//         }} />
//       <p>{errors?.dataNascimento?.message}</p>
//     </div>

//     <div className="estado-civil">
//       <label id="estado-civil">Estado Civíl</label>
//       <select name="estadoCivil"
//         {...register("estadoCivil")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, estadoCivil: e.target.value })
//         }}>
//         <option value="estadoCivil-vazio"></option>
//         <option value="solteiro">Solteiro</option>
//         <option value="casado">Casado</option>
//         <option value="divorciado">Divorciado</option>
//       </select>
//       <p>{errors?.estadoCivil?.message}</p>
//     </div>

//     <div className="sexo">
//       <label >Sexo</label>
//       <select {...register("sexo")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, sexo: e.target.value })
//         }} >
//         <option value="sexo-vazio"></option>
//         <option value="masculino">Masculino</option>
//         <option value="feminino">Feminino</option>
//       </select>
//       <p>{errors?.sexo?.message}</p>
//     </div>

//     <div className="full-box" >
//       <label>Endereço *</label>
//       <input {...register("logradouro")}
//         placeholder="Ex: Rua, nº, Bloco"
//         value={formValues.logradouro}
//         onChange={(e) => {
//           setFormValues({ ...formValues, logradouro: e.target.value })
//         }} />
//       {errors?.logradouro?.message}
//     </div>

//     <div className="half-box" >
//       <label >Bairro *</label>
//       <input {...register("bairro")}
//         placeholder="Digite o seu bairro"
//         value={formValues.bairro}
//         onChange={(e) => {
//           setFormValues({ ...formValues, bairro: e.target.value })
//         }} />
//       {errors?.bairro?.message}
//     </div>

//     <div className="half-box" >
//       <label >Cidade *</label>
//       <input {...register("cidade")}
//         placeholder="Digite sua Cidade"
//         value={formValues.cidade}
//         onChange={(e) => {
//           setFormValues({ ...formValues, cidade: e.target.value })
//         }} />
//       {errors?.cidade?.message}
//     </div>

//     <div className="triple-box">
//       <div className="form-group">
//         <label >CEP *</label>
//         <input {...register("cep")}
//           id="cep" placeholder="Ex: 00000-000"
//           value={formValues.cep}
//           onBlur={() => fetchAddress()}
//           onChange={(e) => {
//             setFormValues({ ...formValues, cep: e.target.value })
//           }}
//         />
//         <TrackCep events={events} />
//         {errors?.cep?.message}
//       </div>
//     </div>

//     <div className="triple-box">
//       <label >Telefone Fixo 1</label>
//       <input type="text" name="telefone1" id="telefone1"
//         placeholder="Ex: (00) 0000-0000"
//         {...register("telefone1")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, telefone1: e.target.value })
//         }} />
//       <p>{errors?.telefone1?.message}</p>
//     </div>

//     <div className="triple-box">
//       <label >Telefone Fixo 2</label>
//       <input type="text" name="telefone2" id="telefone2"
//         placeholder="Ex: (00) 0000-0000"
//         {...register("telefone2")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, telefone2: e.target.value })
//         }} />
//       <p>{errors?.telefone2?.message}</p>
//     </div>

//     <div className="triple-box">
//       <label >Celular</label>
//       <input type="text" name="celular" id="celular"
//         placeholder="Ex: (00) 00000-0000"
//         {...register("celular")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, celular: e.target.value })
//         }} />
//       <p>{errors?.celular?.message}</p>
//     </div>

//     <div className="triple-box">
//       <label >Contato</label>
//       <input type="text" name="contato" id="contato"
//         placeholder="Digite um nome para contato"
//         {...register("contato")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, contato: e.target.value })
//         }} />
//       <p>{errors?.contato?.message}</p>
//     </div>

//     <div className="triple-box">
//       <label htmlFor="email">E-mail</label>
//       <input type="email" name="email" id="email"
//         placeholder="ex: example@myname.com"
//         {...register("email")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, email: e.target.value })
//         }} />
//       <p>{errors?.email?.message}</p>
//     </div>

//     <div className="quarter-box">
//       <label htmlFor="identidade">Identidade</label>
//       <input type="text" name="identidade" id="identidade"
//         placeholder="Digite o seu RG"
//         {...register("identidade")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, identidade: e.target.value })
//         }} />
//       <p>{errors?.identidade?.message}</p>
//     </div>

//     <div className="quarter-box">
//       <label >CPF</label>
//       <input type="text" name="cpf" id="cpf"
//         placeholder="Ex: 000.000.000-00"
//         {...register("cpf")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, cpf: e.target.value })
//         }} />
//       <p>{errors?.cpf?.message}</p>
//     </div>

//     <div className="quarter-box" >
//       <label id="veiculo">Possui Veículo</label>
//       <select name="possuiVeiculo"
//         {...register("possuiVeiculo")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, possuiVeiculo: e.target.value })
//         }}>
//         <option value="veiculo-nao">Não</option>
//         <option value="veiculo-sim">Sim</option>
//       </select>
//       <p>{errors?.possuiVeiculo?.message}</p>
//     </div>

//     <div className="quarter-box" >
//       <label id="categoriaCNH" >categoria CNH</label>
//       <select name="categoriaCNH"
//         {...register("categoriaCNH")}
//         onChange={(e) => {
//           setFormValues({ ...formValues, categoriaCNH: e.target.value })
//         }}
//       >
//         <option value="categoria-vazia">Categoria</option>
//         <option value="categoria-a">A</option>
//         <option value="categoria-b">B</option>
//         <option value="categoria-c">C</option>
//         <option value="categoria-d">D</option>
//         <option value="categoria-e">E</option>
//       </select>
//       <p>{errors?.categoriaCNH?.message}</p>
//     </div>

//     <div className="full-box">
//       <input type="submit" id="btn-submit" value="Registrar" />
//     </div >

//   </form >
// </div >
