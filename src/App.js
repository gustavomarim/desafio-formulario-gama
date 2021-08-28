import React, { useState } from 'react';
import './App.css';
import TrackCep from './components/TrackCep';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function App() {

  const schema = yup.object().shape({
    nome: yup.string('Digite um nome válido'), //.required('Campo obrigatório'),
    cargoPretendido: yup.string('Digite um cargo válido'), //.required('Campo Profissão obrigatório'),
    dataNasc: yup.string(),
    estadoCivil: yup.string(),
    sexo: yup.string(),
    endereco: yup.string(),//.required('Campo endereço obrigatório'),
    bairro: yup.string(),//.required('Campo Bairro obrigatório'),
    cidade: yup.string('Digite uma cidade válida'),//.min(2, 'Cidade precisa de no mínimo 2 caracteres'),//.required('Campo Cidade obrigatório'),
    cpf: yup.string().matches(/^(\d{3}){2}\d{3}\d{2}$/, 'Digite um CPF válido'),//.required('Campo CPF obrigatório'),
    // telefone1: yup.number('Digite um número de telefone válido'),
    // telefone2: yup.number('Digite um número de telefone válido'),
    celular: yup.string('Digite um número de celular válido'),//.required('Campo celular obrigatório'),
    contato: yup.string('Digite um nome de contato válido'),
    email: yup.string('Digite um e-mail válido')
      .email('Digite um email: ex...'),//.required('Campo e-mail Obrigatório'),
    // identidade: yup.number(11,'Digite um número de RG válido'),
    cep: yup.string(),
    possuiVeiculo: yup.string(),
    categoriaCNH: yup.string(),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const convertToArray = (obj) => {
    const arr = [obj]
    return arr
  }

  const onSubmit = data => {

    console.log('dados do onSubmit', data);

    fetch(`http://localhost:3001/?cep=${data.cep}`)
      .then(response => response.json())
      .then(data => {
        const array = convertToArray(data)
        console.log('array', array);
        setEvents(array)
      })
      .catch(error => console.error);


  }

  const [events, setEvents] = useState([])

  // Seta todos os valores dentro de objetos
  // const [formValues, setFormValues] = useState({})

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target
  //   setFormValues({ ...formValues, [name]: value })
  // }

  return (

    <div id="main-container" >
      <h1>Cadastro de Currículo - JobsNET</h1>

      <form id="register-form" onSubmit={handleSubmit(onSubmit)} >

        <div className="half-box" >
          <label htmlFor="name">Nome</label>
          <input {...register("nome")} />
          {errors?.nome?.message}
        </div>

        <div className="half-box" >
          <label htmlFor="cargo" >Cargo Pretendido</label>
          <input {...register("cargoPretendido")} />
          {errors?.cargoPretendido?.message}
        </div>

        <div className="dataNascimento">
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input {...register("dataNasc")} type="date" />
          {errors?.dataNasc?.message}
        </div>

        <div className="estado-civil">
          <label id="e1stado-civil">Estado Civíl</label>
          <select {...register("estadoCivil")} name="estadoCivil">
            <option value="solteiro(a)">Solteiro(a)</option>
            <option value="casado(a)">Casado(a)</option>
            <option value="divorciado(a)">Divorciado(a)</option>
            <option value="outros">Outros</option>
          </select>
          {errors?.estadoCivil?.message}
        </div>

        <div className="sexo">
          <label >Sexo</label>
          <select {...register("sexo")} name="sexo" >
            <option >Escolha seu gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outros">Outros</option>
          </select>
          {errors?.sexo?.message}
        </div>

        <div className="full-box" >
          <label>Endereço</label>
          <input {...register("endereco")} />
          {errors?.endereco?.message}
        </div>

        <div className="half-box" >
          <label >Bairro</label>
          <input {...register("bairro")} />
          {errors?.bairro?.message}
        </div>

        <div className="half-box" >
          <label >Cidade</label>
          <input {...register("cidade")} />
          {errors?.cidade?.message}
        </div>

        <div className="triple-box">
          <div className="form-group">
            <label >CEP</label>
            <input {...register("cep")} id="cep" />
            <TrackCep events={events} />
            {errors?.cep?.message}
          </div>
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 1</label>
          <input {...register("telefone1")} />
          {errors?.telefone1?.message}
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 2</label>
          <input {...register("telefone2")} />
          {errors?.telefone2?.message}
        </div>

        <div className="triple-box">
          <label >Celular</label>
          <input {...register("celular")} />
          {errors?.celular?.message}
        </div>

        <div className="triple-box">
          <label >Contato</label>
          <input {...register("contato")} />
          {errors?.contato?.message}
        </div>

        <div className="triple-box">
          <label htmlFor="email">E-mail</label>
          <input {...register("email")} />
          {errors?.email?.message}
        </div>

        {/* <h1 id="documentos">Documentos</h1> */}

        <div className="quarter-box">
          <label htmlFor="identidade">Identidade</label>
          <input {...register("identidade")} />
          {errors?.identidade?.message}
        </div>

        <div className="quarter-box">
          <label >CPF</label>
          <input {...register("cpf")} />
          {errors?.cpf?.message}
        </div>

        <div className="quarter-box" >
          <label id="veiculo">Possui Veículo</label>
          <select {...register("possuiVeiculo")} name="possuiVeiculo" >
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>
          {errors?.possuiVeiculo?.message}
        </div>

        <div className="quarter-box" >
          <label id="veiculo">Habilitação</label>
          <select {...register("categoriaCNH")} name="categoriaCNH" >
            <option value="categoria-vazia">Categoria</option>
            <option value="categoria-a">A</option>
            <option value="categoria-b">B</option>
            <option value="categoria-c">C</option>
            <option value="categoria-d">D</option>
            <option value="categoria-e">E</option>
          </select>
          {errors?.categoriaCNH?.message}
        </div>

        <div className="full-box">
          <input type="submit" id="btn-submit" value="Registrar" />
        </div>

      </form>
    </div >
  );
}

export default App;


  // const handleeSubmit = e => {
  //   e.preventDefault()
  //   const formData = new FormData(e.target)
  //   const data = Object.fromEntries(formData) // Obj com todos os dados do form

  //   console.log('handleeSubmit', data);

  //   fetch(`http://localhost:3001/?cep=${data.cep}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       const array = convertToArray(data)
  //       console.log(array);
  //       setEvents(array)
  //     })
  //     .catch(error => console.error)
  // }

  // console.log('formValues', formValues);