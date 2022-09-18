import { useContext } from 'react';
import '../App.css';
import FormContext from '../context/FormContext';

const NewPageRenderiza = ({ history }) => {
  const { formData } = useContext(FormContext);

  const home = () => {
    history.push('/');
  }
  return (
    <div className="App-header">
      <h1>Lista de alunos</h1>
      <ol>
        {formData.map((item) => (
        <div key={item.id}>
            <li>{item.name}</li>
            <li>{item.idade}</li>
            <li>{item.Bloco}</li>
        </div>
        ))}
      </ol>
      <button type="button" onClick={home}>Home</button>
    </div>
  );

}

export default NewPageRenderiza;