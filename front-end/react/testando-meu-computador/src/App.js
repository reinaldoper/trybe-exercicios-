
import './App.css';
import React from 'react';

function App() {
  /* function tick() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
      </div>
    );
  } */
  function helloWorld (nome, sobrenome) {
    return <h4>Hello, {`${nome} ${sobrenome}`}</h4>;
  }
  
  const element = helloWorld("Jorge", "Maravilha");
  const container = <div>{element}</div>;
  const textJSX = <h1>Hello, JSX</h1>;

  return (
    <div className="App">
        {textJSX}
     {container}
     {/* {setInterval(tick, 1000)} */}
    </div>
  );
}

export default App;
