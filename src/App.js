import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
      // cep: `${address.data.cep}`,
      cidade: `${address.data.localidade}, ${address.data.uf}`,
      logradouro: address.data.logradouro,
      bairro: address.data.bairro
    });
  };

  const onSubmit = data => {
    console.log("onSubmit", data.cep);
    try {
      setFormValues(data);
      createCandidate();
    } catch (error) {
      console.log(error);
    }
  };

  const createCandidate = async () => {
    console.log('você está no createCandidate');
    try {
      const user = await axios.post('http://localhost:3001/register', formValues);
      if (user.status === 200) {
        alert('Cadastro realizado com sucesso!');
        console.log('Requisição POST realizada com Sucesso!');
      }
    } catch (error) {
      alert('Cadastro não realizado!');
      console.log('Requisição POST negada!');
    }
  }

  console.log(formValues.cep);

  return (
    <div id="main-container" onSubmit={handleSubmit(onSubmit)} >
      <h1>Cadastro de Currículo - JobsNET</h1>

      <form id="register-form">

        <div className="half-box" >
          <label htmlFor="nome">Nome</label>
          <input {...register("nome")}
            placeholder="Digite seu nome completo"
            onChange={(e) => {
              setFormValues({ ...formValues, nome: e.target.value })
            }}
          />
          <p>{errors?.nome?.message}</p>
        </div>

        <div className="half-box" >
          <label htmlFor="cargo" >Cargo Pretendido</label>
          <input
            placeholder="Digite o cargo que deseja se candidatar"
            {...register("cargoPretendido")}
            onChange={(e) => {
              setFormValues({ ...formValues, cargoPretendido: e.target.value })
            }}
          />
          <p>{errors?.cargoPretendido?.message}</p>
        </div>

        <div className="dataNascimento">
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input type="date"
            {...register("dataNascimento")}
            onChange={(e) => {
              setFormValues({ ...formValues, dataNascimento: e.target.value })
            }} />
          <p>{errors?.dataNascimento?.message}</p>
        </div>

        <div className="estado-civil">
          <label id="estado-civil">Estado Civíl</label>
          <select name="estadoCivil"
            {...register("estadoCivil")}
            onChange={(e) => {
              setFormValues({ ...formValues, estadoCivil: e.target.value })
            }}>
            <option value="estadoCivil-vazio"></option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
          <p>{errors?.estadoCivil?.message}</p>
        </div>

        <div className="sexo">
          <label >Sexo</label>
          <select {...register("sexo")}
            onChange={(e) => {
              setFormValues({ ...formValues, sexo: e.target.value })
            }} >
            <option value="sexo-vazio"></option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          <p>{errors?.sexo?.message}</p>
        </div>

        <div className="full-box" >
          <label>Endereço</label>
          <input placeholder="ex: Nome da Rua, nº. Bloco nº, AP nº"
            {...register("logradouro")}
            value={formValues.logradouro}
            onChange={(e) => {
              setFormValues({ ...formValues, logradouro: e.target.value })
            }}
          />
          <p>{errors?.logradouro?.message}</p>
        </div>

        <div className="half-box" >
          <label >Bairro</label>
          <input
            placeholder="Digite o seu bairro"
            {...register("bairro")}
            value={formValues.bairro}
            onChange={(e) => {
              setFormValues({ ...formValues, bairro: e.target.value })
            }}
          />
          <p>{errors.bairro?.message}</p>
        </div>

        <div className="half-box" >
          <label >Cidade</label>
          <input
            placeholder="Digite sua cidade"
            {...register("cidade")}
            value={formValues.cidade}
            onChange={(e) => {
              setFormValues({ ...formValues, cidade: e.target.value })
            }}
          />
          <p>{errors.cidade?.message}</p>
        </div>

        <div className="triple-box">
          <label >CEP</label>
          <input
            id="cep" placeholder="Ex:00000-000"
            {...register("cep")}
            onBlur={() => {
              fetchAddress();
            }}
            value={formValues.cep}
            onChange={(e) => {
              setFormValues({ ...formValues, cep: e.target.value })
            }}
          />
          <p>{errors?.cep?.message}</p>
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 1</label>
          <input type="text" name="telefone1" id="telefone1"
            placeholder="Ex: (00) 0000-0000"
            {...register("telefone1")}
            onChange={(e) => {
              setFormValues({ ...formValues, telefone1: e.target.value })
            }} />
          <p>{errors?.telefone1?.message}</p>
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 2</label>
          <input type="text" name="telefone2" id="telefone2"
            placeholder="Ex: (00) 0000-0000"
            {...register("telefone2")}
            onChange={(e) => {
              setFormValues({ ...formValues, telefone2: e.target.value })
            }} />
          <p>{errors?.telefone2?.message}</p>
        </div>

        <div className="triple-box">
          <label >Celular</label>
          <input type="text" name="celular" id="celular"
            placeholder="Ex: (00) 00000-0000"
            {...register("celular")}
            onChange={(e) => {
              setFormValues({ ...formValues, celular: e.target.value })
            }} />
          <p>{errors?.celular?.message}</p>
        </div>

        <div className="triple-box">
          <label >Contato</label>
          <input type="text" name="contato" id="contato"
            placeholder="Digite um nome para contato"
            {...register("contato")}
            onChange={(e) => {
              setFormValues({ ...formValues, contato: e.target.value })
            }} />
          <p>{errors?.contato?.message}</p>
        </div>

        <div className="triple-box">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email"
            placeholder="ex: example@myname.com"
            {...register("email")}
            onChange={(e) => {
              setFormValues({ ...formValues, email: e.target.value })
            }} />
          <p>{errors?.email?.message}</p>
        </div>

        <div className="quarter-box">
          <label htmlFor="identidade">Identidade</label>
          <input type="text" name="identidade" id="identidade"
            placeholder="Digite o seu RG"
            {...register("identidade")}
            onChange={(e) => {
              setFormValues({ ...formValues, identidade: e.target.value })
            }} />
          <p>{errors?.identidade?.message}</p>
        </div>

        <div className="quarter-box">
          <label >CPF</label>
          <input type="text" name="cpf" id="cpf"
            placeholder="Ex: 000.000.000-00"
            {...register("cpf")}
            onChange={(e) => {
              setFormValues({ ...formValues, cpf: e.target.value })
            }} />
          <p>{errors?.cpf?.message}</p>
        </div>

        <div className="quarter-box" >
          <label id="veiculo">Possui Veículo</label>
          <select name="possuiVeiculo"
            {...register("possuiVeiculo")}
            onChange={(e) => {
              setFormValues({ ...formValues, possuiVeiculo: e.target.value })
            }}>
            <option value="veiculo-nao">Não</option>
            <option value="veiculo-sim">Sim</option>
          </select>
          <p>{errors?.possuiVeiculo?.message}</p>
        </div>

        <div className="quarter-box" >
          <label id="categoriaCNH" >categoria CNH</label>
          <select name="categoriaCNH"
            {...register("categoriaCNH")}
            onChange={(e) => {
              setFormValues({ ...formValues, categoriaCNH: e.target.value })
            }}
          >
            <option value="categoria-vazia">Categoria</option>
            <option value="categoria-a">A</option>
            <option value="categoria-b">B</option>
            <option value="categoria-c">C</option>
            <option value="categoria-d">D</option>
            <option value="categoria-e">E</option>
          </select>
          <p>{errors?.categoriaCNH?.message}</p>
        </div>

        <div className="full-box">
          <input type="submit" id="btn-submit" value="Registrar" />
        </div >

      </form >
    </div >
  );
}

export default App;
