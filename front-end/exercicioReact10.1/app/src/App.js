import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const compromissos = ['Viajar', 'trabalhar', 'estudar'];
const myList = compromissos.map((item) => Task(item))
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ol>{myList}</ol>
      </header>
    </div>
  );
}

export default App;
