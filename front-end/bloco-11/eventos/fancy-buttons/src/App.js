import logo from './logo.svg';
import './App.css';

function handleClick() {
  console.log('Clicou no botão1!')
}
function handleClicks() {
  console.log('Clicou no botão2!')
}
function handleCli() {
  console.log('Clicou no botão3!')
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>Meu botão1</button>
        <button onClick={handleClicks}>Meu botão2</button>
        <button onClick={handleCli}>Meu botão3</button>
      </header>
    </div>
  );
}

export default App;
