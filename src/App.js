import { useState } from 'react';
import './App.css';

function App() {

  const [formValues, setFormValues] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData) // Obj com todos os dados do form

    console.log('handleSubmit', data);
  }

  console.log('formValues', formValues);

  return (
    <div id="main-container" onSubmit={handleSubmit} >
      <h1>Cadastro de Currículo</h1>

      <form id="register-form">

        <div className="half-box" >
          <label htmlFor="name">Nome</label>
          <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo"
            onChange={handleInputChange} value={formValues.nome || ''} />
        </div>

        <div className="half-box" >
          <label htmlFor="cargo" >Cargo Pretendido</label>
          <input type="text" name="cargo" id="cargo" onChange={handleInputChange}
            value={formValues.cargo || ''} />
        </div>

        <div className="dataNascimento">
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input type="date" id="nascimento" name="nascimento" onChange={handleInputChange} value={formValues.nascimento || ''} />
        </div>

        <div className="estado-civil">
          <label id="estado-civil">Estado Civíl</label>
          <select name="estadoCivil" onChange={handleInputChange}
            value={formValues.estadoCivil || ''} >
            <option value="empty"></option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>

        <div className="sexo">
          <label >Sexo</label>
          <select name="sexo" onChange={handleInputChange}
            value={formValues.sexo || ''} >
            <option value="empty"></option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        <div className="full-box" >
          <label>Endereço</label>
          <input type="text" name="endereco" id="endereco" placeholder="ex: Nome da Rua, nº. Bloco nº, AP nº"
            onChange={handleInputChange} value={formValues.endereco || ''} />
        </div>

        <div className="half-box" >
          <label >Bairro</label>
          <input type="text" name="bairro" id="bairro" onChange={handleInputChange} value={formValues.bairro || ''} />
        </div>

        <div className="half-box" >
          <label >Cidade</label>
          <input type="text" name="cidade" id="cidade" onChange={handleInputChange} value={formValues.cidade || ''} />
        </div>

        <div className="triple-box">
          <label >CEP</label>
          <input type="text" name="cep" id="cep" onChange={handleInputChange} value={formValues.cep || ''} />
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 1</label>
          <input type="text" name="telefone1" id="telefone1" onChange={handleInputChange} value={formValues.telefone1 || ''} />
        </div>

        <div className="triple-box">
          <label >Telefone Fixo 2</label>
          <input type="text" name="telefone2" id="telefone2" onChange={handleInputChange} value={formValues.telefone2 || ''} />
        </div>

        <div className="triple-box">
          <label >Celular</label>
          <input type="text" name="celular" id="celular" onChange={handleInputChange} value={formValues.celular || ''} />
        </div>

        <div className="triple-box">
          <label >Contato</label>
          <input type="text" name="contato" id="contato" onChange={handleInputChange} value={formValues.contato || ''} />
        </div>

        <div className="triple-box">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder="ex: example@myname.com" onChange={handleInputChange} value={formValues.email || ''} />
        </div>

        {/* <h1 id="documentos">Documentos</h1> */}

        <div className="quarter-box">
          <label htmlFor="identidade">Identidade</label>
          <input type="text" name="identidade" id="identidade" onChange={handleInputChange} value={formValues.identidade || ''} />
        </div>

        <div className="quarter-box">
          <label >CPF</label>
          <input type="text" name="cpf" id="cpf" onChange={handleInputChange} value={formValues.cpf || ''} />
        </div>

        <div className="quarter-box" >
          <label id="veiculo">Possui Veículo</label>
          <select name="veiculo" onChange={handleInputChange}
            value={formValues.veiculo || ''}>
            <option value="empty"></option>
            <option value="veiculo-sim">Sim</option>
            <option value="veiculo-nao">Não</option>
          </select>
        </div>

        <div className="quarter-box" >
          <label id="veiculo">Habilitação</label>
          <select name="categoriaCnh" onChange={handleInputChange}
            value={formValues.categoriaCnh || ''}>
            <option value="categoria">Categoria</option>
            <option value="categoria-a">A</option>
            <option value="categoria-b">B</option>
            <option value="categoria-c">C</option>
            <option value="categoria-d">D</option>
            <option value="categoria-e">E</option>
          </select>
        </div>

        <div className="full-box">
          <input type="submit" id="btn-submit" value="Registrar" />
        </div>

      </form>
    </div >
  );
}

export default App;
