import React, { useState } from 'react';
import './App.css';
import TrackCep from './components/TrackCep';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import schema from './validations/Validation';

function App() {

  /* http://localhost:61757   => build */

  const [events, setEvents] = useState([]);

  // Seta todos os valores dentro de objetos
  const [formValues, setFormValues] = useState({})

  // Instancias do Form Hook
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Converte objeto de eventos em Array
  const convertToArray = (obj) => {
    const arr = [obj]
    return arr
  };

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${formValues.cep}/json`);
    const array = convertToArray(formValues.cep);
    setEvents(array);
    setFormValues({
      ...formValues,
      cidade: `${address.data.localidade}, ${address.data.uf}`,
      logradouro: address.data.logradouro,
      bairro: address.data.bairro
    });
  };

  const onSubmit = data => {
    try {
      setFormValues(data);
      createCandidate();

    } catch (error) {
      console.log(error);
    }
  };

  const createCandidate = async () => {
    console.log('você está no createCandidate')
    try {
      // mongodb+srv://GustavoDantas:190713@cluster0.bachh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
      const user = await axios.post('http://localhost:3001/register', formValues); // post recebe um obj
      if (user.status === 200) {
        alert('Cadastro realizado com sucesso!')
        console.log('Requisição POST realizada com Sucesso!');
      }
    } catch (error) {
      alert('Cadastro não realizado!');
      console.log('Requisição POST negada!');
    }
  };

  return (

    <div id="main-container" >
      <h1>Cadastro de Currículo - JobsNET</h1>

      <form id="register-form" onSubmit={handleSubmit(onSubmit)} >

        <div className="half-box" >
          <label htmlFor="name">Nome Completo *</label>
          <input {...register("nome")}
            placeholder="Digite seu nome completo"
            onChange={(e) => {
              setFormValues({ ...formValues, nome: e.target.value })
            }}
          />
          {errors?.nome?.message}
        </div>

        <div className="half-box" >
          <label htmlFor="cargo" >Cargo Pretendido *</label>
          <input {...register("cargoPretendido")} placeholder="Digite o cargo que deseja se candidatar"
            onChange={(e) => {
              setFormValues({ ...formValues, cargoPretendido: e.target.value })
            }}
          />
          {errors?.cargoPretendido?.message}
        </div>

        <div className="dataNascimento">
          <label htmlFor="nascimento">Data de Nascimento *</label>
          <input {...register("dataNasc")} type="date"
            onChange={(e) => {
              setFormValues({ ...formValues, dataNasc: e.target.value })
            }} />
          {errors?.dataNasc?.message}
        </div>

        <div className="estado-civil">
          <label id="e1stado-civil">Estado Civíl</label>
          <select {...register("estadoCivil")} name="estadoCivil"
            onChange={(e) => {
              setFormValues({ ...formValues, estadoCivil: e.target.value })
            }}
          >
            <option value=""></option>
            <option value="solteiro(a)">Solteiro(a)</option>
            <option value="casado(a)">Casado(a)</option>
            <option value="divorciado(a)">Divorciado(a)</option>
            <option value="outros">Outros</option>
          </select>
          {errors?.estadoCivil?.message}
        </div>

        <div className="sexo">
          <label >Sexo</label>
          <select {...register("sexo")} name="sexo"
            onChange={(e) => {
              setFormValues({ ...formValues, sexo: e.target.value })
            }} >
            <option >Escolha seu gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outros">Outros</option>
          </select>
          {errors?.sexo?.message}
        </div>

        <div className="full-box" >
          <label>Endereço *</label>
          <input {...register("logradouro")}
            placeholder="Ex: Rua, nº, Bloco"
            value={formValues.logradouro}
            onChange={(e) => {
              setFormValues({ ...formValues, logradouro: e.target.value })
            }} />
          {errors?.logradouro?.message}
        </div>

        <div className="half-box" >
          <label >Bairro *</label>
          <input {...register("bairro")}
            placeholder="Digite o seu bairro"
            value={formValues.bairro}
            onChange={(e) => {
              setFormValues({ ...formValues, bairro: e.target.value })
            }} />
          {errors?.bairro?.message}
        </div>

        <div className="half-box" >
          <label >Cidade *</label>
          <input {...register("cidade")}
            placeholder="Digite sua Cidade"
            value={formValues.cidade}
            onChange={(e) => {
              setFormValues({ ...formValues, cidade: e.target.value })
            }} />
          {errors?.cidade?.message}
        </div>

        <div className="triple-box">
          <div className="form-group">
            <label >CEP *</label>
            <input {...register("cep")}
              id="cep" placeholder="Ex: 00000-000"
              onBlur={() => fetchAddress()}
              onChange={(e) => {
                setFormValues({ ...formValues, cep: e.target.value })
              }} />
            <TrackCep events={events} />
            {errors?.cep?.message}
          </div>
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 1</label>
          <input {...register("telefone1")} placeholder="Ex: (00) 0000-0000"
            onChange={(e) => {
              setFormValues({ ...formValues, telefone1: e.target.value })
            }}
          />
          {errors?.telefone1?.message}
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 2</label>
          <input {...register("telefone2")} placeholder="Ex: (00) 0000-0000"
            onChange={(e) => {
              setFormValues({ ...formValues, telefone2: e.target.value })
            }} />
          {errors?.telefone2?.message}
        </div>

        <div className="triple-box">
          <label >Celular *</label>
          <input {...register("celular")} placeholder="Ex: (00) 00000-0000"
            onChange={(e) => {
              setFormValues({ ...formValues, celular: e.target.value })
            }} />
          {errors?.celular?.message}
        </div>

        <div className="triple-box">
          <label >Contato</label>
          <input {...register("contato")} placeholder="Digite um nome para contato"
            onChange={(e) => {
              setFormValues({ ...formValues, contato: e.target.value })
            }} />
          {errors?.contato?.message}
        </div>

        <div className="triple-box">
          <label htmlFor="email">E-mail *</label>
          <input {...register("email")} placeholder="Ex: exemplo@provedor.com"
            onChange={(e) => {
              setFormValues({ ...formValues, email: e.target.value })
            }} />
          {errors?.email?.message}
        </div>

        <div className="quarter-box">
          <label htmlFor="identidade">Identidade</label>
          <input {...register("identidade")} placeholder="Digite seu RG"
            onChange={(e) => {
              setFormValues({ ...formValues, identidade: e.target.value })
            }} />
          {errors?.identidade?.message}
        </div>

        <div className="quarter-box">
          <label >CPF *</label>
          <input {...register("cpf")} placeholder="Ex: 000.000.000-00"
            onChange={(e) => {
              setFormValues({ ...formValues, cpf: e.target.value })
            }} />
          {errors?.cpf?.message}
        </div>

        <div className="quarter-box" >
          <label id="veiculo">Possui Veículo</label>
          <select {...register("possuiVeiculo")} name="possuiVeiculo"
            onChange={(e) => {
              setFormValues({ ...formValues, possuiVeiculo: e.target.value })
            }} >
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>
          {errors?.possuiVeiculo?.message}
        </div>

        <div className="quarter-box" >
          <label id="veiculo">Habilitação</label>
          <select {...register("categoriaCNH")} name="categoriaCNH"
            onChange={(e) => {
              setFormValues({ ...formValues, categoriaCNH: e.target.value })
            }}>
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
          <input type="submit" id="btn-submit" value="Registrar"
          />
        </div>

      </form>
    </div >
  );
}

export default App;
