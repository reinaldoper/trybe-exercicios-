import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    nome: '',
    password: '',
    cpf: '',
    box: '',
    house: '',
  }

  honChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <form>
        <fieldset>
        <legend>Formulário</legend>
          <input type='text' required maxLength={40} name='nome' value={this.state.nome}
                        onChange={this.honChange} className='text'></input>
          <input type='password' maxLength={50} required name='password' value={this.state.password}
                        onChange={this.honChange}></input>
          <input type='text' required maxLength={11} name='cpf' value={this.state.cpf}
                        onChange={this.honChange}></input>
          <select name='box' required value={this.state.box}
                        onChange={this.honChange}>
           <option>Select Estates</option>
               <option>MS</option>
               <option>PR</option>
               <option>MT</option>
               <option>RJ</option>
               <option>SP</option>
               <option>AC</option>
          </select>
          <div onChange={this.honChange}>
               <input type="radio" name="house" value='casa' />Casa<br />
               <input type="radio" name="house" value='apartamento' />Apartamento<br />
          </div>
      </fieldset>
      </form>
    );
  }
  
}

export default App;
