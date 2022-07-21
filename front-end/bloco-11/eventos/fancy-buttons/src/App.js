import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
    this.handleClicks = this.handleClicks.bind(this)
    this.handleCli= this.handleCli.bind(this)
  }
  handleClick = () => {
    console.log('Clicou no botão1!')
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
          <button onClick={this.handleClick}>Meu botão1</button>
          <button onClick={this.handleClicks}>Meu botão2</button>
          <button onClick={this.handleCli}>Meu botão3</button>
        </header>
      </div>
    );
  }
  
}

export default App;
