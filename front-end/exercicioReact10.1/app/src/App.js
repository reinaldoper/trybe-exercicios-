import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const compromissos = ['Viajar', 'trabalhar', 'estudar'];
const myList = compromissos.map((item) => Task(item))
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <ol>{myList}</ol>
      </header>
      <div className='div'>
      <Content/>
      </div>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
