import React from 'react';
import './App.css';
import Forms from './Forms';
import Senha from './Senha';
import Cpf from './Cpf';
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Radio from './Radio';
import Display from './Display';

const valores = {
  nome: '',
  password: '',
  cpf: '',
  box: '',
  house: '',
  endereco: '',
  cidade: '',
  curriculo: '',
  cargo: '',
  descricao: '',
  alert: true,
  submitted: false,
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = valores;
  }

  honChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }
  handleBlur = ({ target }) => {
    const num = target.value;
    if (!isNaN(num[0])) {
      this.setState({
        cidade: '',
      });
      alert('Campo inválido.')
      target.value = '';
    }
  }
  honMouse = () => {
    if (this.state.alert === true) {
      alert('Preencha com cuidado esta informação.')
    }
    this.setState({
      alert: false,
    })
  }
  renderizaDisplay = () => {
    this.setState({ submitted: true })
  }
  limpaDisplay = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      input => (input.value = "")
    );
    this.setState(valores);
  }
  render() {
    const { submitted } = this.state;
    return (
      <main>
      <form>
        <fieldset className='form1'>
          <legend>Dados pessoais</legend>
          <label>Nome: </label>
            <Forms honChange={this.honChange} /> 
          <label>Senha: </label>
          <Senha honChange={this.honChange} />
          <label>Cpf: </label>
          <Cpf honChange={this.honChange} />
          <label>Endereço: </label>
          <Endereco honChange={this.honChange} />
          <label>Cidade: </label>
          <Cidade honChange={this.honChange} handleBlur={this.handleBlur} />
          <label>Estado nasc: </label>
          <Estado honChange={this.honChange} />
          <Radio honChange={this.honChange} />
        </fieldset>
        <fieldset className='form2'>
          <legend>Último emprego</legend>
          <label>Curriculo: </label>
          <textarea type='text' required="required" maxLength={1000} name='curriculo' value={this.state.curriculo}
            onChange={this.honChange} className='curriculo' />
          <label>Cargo: </label>
          <textarea type='text' required="required" maxLength={40} name='cargo' value={this.state.cargo}
            onChange={this.honChange} onMouseEnter={this.honMouse} className='cargo' />
          <label>Descrição cargo: </label>
          <input type='text' required="required" maxLength={500} name='descricao' value={this.state.descricao}
            onChange={this.honChange} className='descricao' />
        </fieldset>
          <button type='button' className='botao' onClick={this.renderizaDisplay}>Submeter</button>
          <button type='button' className='botao' onClick={this.limpaDisplay}>Limpar</button>
      </form>
        {submitted && <Display currentState={this.state} />}
    </main>
    );
  }
  
}

export default App;
