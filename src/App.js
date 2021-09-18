import './App.css';
import axios from 'axios';
// import TrackCep from './components/TrackCep';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import schema from './validations/Validation';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [formValues, setFormValues] = useState({});
  const [events, setEvents] = useState([]);

  const convertToArray = (obj) => {
    const arr = [obj];
    return arr;
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

  const createCandidate = async (data) => {
    try {
      const user = await axios.post('http://localhost:3001/register', data);
      if (user.status === 200) {
        alert("Usuário Criado com sucesso!")
      }
    } catch (error) {
      alert("Falha ao criar usuário")
      console.log(error);
    }
  }

  const onSubmit = data => {
    console.log(data);

    try {

    } catch (e) {
      console.log(e);
    }
  };

  // const handleSubmit = (e) => {
  //   // e.preventDefault()
  //   // const formData = new FormData(e.target)
  //   // const data = Object.fromEntries(formData) // Obj com todos os dados do form
  // }

  return (
    <div id="main-container" onSubmit={handleSubmit(onsubmit)} >
      <h1>Cadastro de Currículo - JobsNET</h1>

      <form id="register-form">

        <div className="half-box" >
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome"
            placeholder="Digite seu nome completo"
            {...register("nome")} />
          <p>{errors.nome?.message}</p>
        </div>

        <div className="half-box" >
          <label htmlFor="cargo" >Cargo Pretendido</label>
          <input type="text" name="cargoPretendido" id="cargo"
            placeholder="Digite o cargo que deseja se candidatar"
            {...register("cargo")} />
          <p>{errors.cargoPretendido?.message}</p>
        </div>

        <div className="dataNascimento">
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input type="date" id="dataNascimento" name="dataNascimento"
            {...register("dataNascimento")} />
          <p>{errors.dataNascimento?.message}</p>
        </div>

        <div className="estado-civil">
          <label id="estado-civil">Estado Civíl</label>
          <select name="estadoCivil"
            {...register("estadoCivil")} >
            <option value="estadoCivil-vazio"></option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
          <p>{errors.estadoCivil?.message}</p>
        </div>

        <div className="sexo">
          <label >Sexo</label>
          <select name="sexo" {...register("sexo")} >
            <option value="sexo-vazio"></option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          <p>{errors.sexo?.message}</p>
        </div>

        <div className="full-box" >
          <label>Endereço</label>
          <input type="text" name="logradouro" id="logradouro" placeholder="ex: Nome da Rua, nº. Bloco nº, AP nº"
            {...register("logradouro")}
          />
          <p>{errors.logradouro?.message}</p>
        </div>

        <div className="half-box" >
          <label >Bairro</label>
          <input type="text" name="bairro" id="bairro"
            placeholder="Digite o seu bairro"
            {...register("bairro")} />
          <p>{errors.bairro?.message}</p>
        </div>

        <div className="half-box" >
          <label >Cidade</label>
          <input type="text" name="cidade" id="cidade"
            placeholder="Digite sua cidade"
            {...register("cidade")} />
          <p>{errors.cidade?.message}</p>
        </div>

        <div className="triple-box">
          <label >CEP</label>
          <input type="text" name="cep" id="cep"
            placeholder="Ex:00000-000"
            {...register("cep")} />
          <p>{errors.cep?.message}</p>
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 1</label>
          <input type="text" name="telefone1" id="telefone1"
            placeholder="Ex: (00) 0000-0000"
            {...register("telefone1")} />
          <p>{errors.telefone1?.message}</p>
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 2</label>
          <input type="text" name="telefone2" id="telefone2"
            placeholder="Ex: (00) 0000-0000"
            {...register("telefone2")} />
          <p>{errors.telefone2?.message}</p>
        </div>

        <div className="triple-box">
          <label >Celular</label>
          <input type="text" name="celular" id="celular"
            placeholder="Ex: (00) 00000-0000"
            {...register("celular")} />
          <p>{errors.celular?.message}</p>
        </div>

        <div className="triple-box">
          <label >Contato</label>
          <input type="text" name="contato" id="contato"
            placeholder="Digite um nome para contato"
            {...register("contato")} />
          <p>{errors.contato?.message}</p>
        </div>

        <div className="triple-box">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email"
            placeholder="ex: example@myname.com"
            {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div className="quarter-box">
          <label htmlFor="identidade">Identidade</label>
          <input type="text" name="identidade" id="identidade"
            placeholder="Digite o seu RG"
            {...register("identidade")} />
          <p>{errors.identidade?.message}</p>
        </div>

        <div className="quarter-box">
          <label >CPF</label>
          <input type="text" name="cpf" id="cpf"
            placeholder="Ex: 000.000.000-00"
            {...register("cpf")} />
          <p>{errors.cpf?.message}</p>
        </div>

        <div className="quarter-box" >
          <label id="veiculo">Possui Veículo</label>
          <select name="possuiVeiculo"
            {...register("veiculo")}>
            <option value="veiculo-nao">Não</option>
            <option value="veiculo-sim">Sim</option>
          </select>
          <p>{errors.veiculo?.message}</p>
        </div>

        <div className="quarter-box" >
          <label id="categoriaCNH" >categoria CNH</label>
          <select name="categoriaCNH"
            {...register("categoriaCNH")}>
            <option value="categoria-vazia">Categoria</option>
            <option value="categoria-a">A</option>
            <option value="categoria-b">B</option>
            <option value="categoria-c">C</option>
            <option value="categoria-d">D</option>
            <option value="categoria-e">E</option>
          </select>
          <p>{errors.habilitacao?.message}</p>
        </div>

        <div className="full-box">
          <input type="submit" id="btn-submit" value="Registrar" />
        </div>

      </form>
    </div >
  );
}

export default App;
