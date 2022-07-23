import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    nome: '',
    password: '',
    cpf: '',
    box: '',
    house: '',
    endereco: '',
    cidade: '',
    curriculo: '',
    cargo: '',
    alert: true,
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
  clickButon = ({target}) => {
    console.log(target.value);
  }
  render() {
    return (
      <form>
        <fieldset className='form1'>
          <legend>Dados pessoais</legend>
          <label>Nome: </label>
          <input type='text' required="required" maxLength={40} name='nome' value={this.state.nome}
            onChange={this.honChange} className='text' /> 
          <label>Senha: </label>
          <input type='password' maxLength={50} required="required" name='password' value={this.state.password}
            onChange={this.honChange} /> 
          <label>Cpf: </label>
          <input type='text' required="required" maxLength={11} name='cpf' value={this.state.cpf}
            onChange={this.honChange} /> 
          <label>Endereço: </label>
          <input type='text' required="required" maxLength={200} name='endereco' value={this.state.endereco} onChange={this.honChange} /> 
          <label>Cidade: </label>
          <input type='text' required="required" maxLength={28} name='cidade' value={this.state.cidade} onChange={ this.honChange} onBlur={this.handleBlur} className='cidade' /> 
          <select name='box' required="required" value={this.state.box}
                        onChange={this.honChange}>
           <option>Select Estates</option>
               <option>MS</option>
               <option>PR</option>
               <option>MT</option>
               <option>RJ</option>
               <option>SP</option>
               <option>AC</option>
               <option>AM</option>
               <option>RN</option>
               <option>ES</option>
          </select>
          <div onChange={this.honChange}>
               <input type="radio" name="house" value='casa' />Casa<br />
               <input type="radio" name="house" value='apartamento' />Apartamento<br />
          </div>
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
        <button type='submit' onClick={this.clickButon} className='botao'>Submeter</button>
      </form>
    );
  }
  
}

export default App;
