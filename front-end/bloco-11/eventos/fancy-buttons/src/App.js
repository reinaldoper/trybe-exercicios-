import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    // A função abaixo vincula "manualmente" o `this` à nossa função
  }
  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  handleClicks = () => {
    console.log('Clicou no botão2!')
  }
  handleCli = () => {
    console.log('Clicou no botão3!')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
          <button onClick={this.handleClicks}>Meu botão2</button>
          <button onClick={this.handleCli}>Meu botão3</button>
        </header>
      </div>
    );
  }
  
}

export default App;
