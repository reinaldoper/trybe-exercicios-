import logo from './logo.svg';
import './App.css';
import Image from './Image';
import Foto from './cat-2083492_1280.jpg';

function App() {
  return (
    <div className="App">
      <Image source={Foto} alternativeText='Cute cat staring' className="App-foto" />
      <Image source = {logo} alternativeText = 'Cute cat staring' className="App-logo" />
    </div>
  );
}

export default App;
