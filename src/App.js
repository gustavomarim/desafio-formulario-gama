import './App.css';

function App() {
  return (
    <div id="main-container" >
      <h1>Cadastro de Currículo</h1>

      <form id="register-form">
        <div className="half-box" >
          <label htmlFor="name">Nome</label>
          <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" />
        </div>

        <div className="half-box" >
          <label htmlFor="cargo" >Cargo Pretendido</label>
          <input type="text" name="cargo" id="cargo" />
        </div>

        {/*   <div className="full-box">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder="" />
        </div> */}

        <div className="data-nascimento">
          <label htmlFor="dataMes" id="dataMes">Data de Nascimento</label>
          <select dataMes id="dataMes">
            <option value="empty">Mês</option>
            <option value="janeiro">janeiro</option>
            <option value="fevereiro">fevereiro</option>
            <option value="marco">março</option>
          </select>

          <select dataMes id="dataDia">
            <option value="empty">Dia</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <select dataMes id="dataAno">
            <option value="empty" >Ano</option>
            <option value="1970">1970</option>
            <option value="1970">1970</option>
            <option value="1970">1970</option>
          </select>
        </div>

        <div className="estado-civil">
          <label htmlFor="estado-civil" id="estado-civil">Estado Civíl</label>
          <select estado-civil id="estado-civil">
            <option value="empty"></option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>

        <div className="sexo">
          <label htmlFor="sexo" id="sexo">Sexo</label>
          <select sexo id="sexo">
            <option value="empty"></option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        <div className="full-box" >
          <label htmlFor="endereco">Endereço</label>
          <input type="text" name="endereco" id="endereco" placeholder="ex: Nome da Rua, nº. Bloco nº, AP nº" />
        </div>

        <div className="half-box" >
          <label htmlFor="bairro">Bairro</label>
          <input type="text" name="bairro" id="bairro" placeholder="" />
        </div>

        <div className="half-box" >
          <label htmlFor="cidade">Cidade</label>
          <input type="text" name="cidade" id="cidade" placeholder="" />
        </div>

        <div className="triple-box">
          <label htmlFor="cep">CEP</label>
          <input type="text" name="cep" id="cep" placeholder="" />
        </div>

        <div className="triple-box">
          <label htmlFor="telefone1">Telefone Fixo 1</label>
          <input type="text" name="telefone2" id="telefone2" placeholder="" />
        </div>

        <div className="triple-box">
          <label htmlFor="telefone2">Telefone Fixo 2</label>
          <input type="text" name="telefone2" id="telefone2" placeholder="" />
        </div>

        <div className="triple-box">
          <label htmlFor="celular">Celular</label>
          <input type="text" name="celular" id="celular" placeholder="" />
        </div>

        <div className="triple-box">
          <label htmlFor="contato">Contato</label>
          <input type="text" name="contato" id="contato" placeholder="" />
        </div>

        <div className="triple-box">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder="ex: example@myname.com" />
        </div>

        {/* <h1 id="documentos">Documentos</h1> */}

        <div className="quarter-box">
          <label htmlFor="identidade">Identidade</label>
          <input type="text" name="identidade" id="identidade" placeholder="" />
        </div>

        <div className="quarter-box">
          <label htmlFor="cpf">CPF</label>
          <input type="text" name="cpf" id="cpf" placeholder="" />
        </div>

        <div className="quarter-box" >
          <label htmlFor="veiculo" id="veiculo">Possui Veículo</label>
          <select veiculo id="veiculo">
            <option value="empty"></option>
            <option value="veiculo-sim">Sim</option>
            <option value="veiculo-nao">Não</option>
          </select>
        </div>

        <div className="quarter-box" >
          <label htmlFor="cnh" id="veiculo">Habilitação</label>
          <select veiculo id="cnh">
            <option value="empty"></option>
            <option value="cnh-sim">Sim</option>
            <option value="cnh-nao">Não</option>
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
