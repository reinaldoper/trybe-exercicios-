import React, { useContext, useState } from 'react';
import '../App.css';
import FormContext from '../context/FormContext';

const Form = ({ history }) => {
  const { formData, atualizaForm } = useContext(FormContext);
  const [myForm, setMyForm] = useState({
    name: '',
    idade: '',
    Bloco: '',
  });

  const handChange = ({ target }) => {
    if (target.name === 'label') {
      setMyForm((state) => ({
        ...state,
        Bloco: target.id,
      }))
    }
    setMyForm((state) => ({
      ...state,
      [target.name]: target.value,
    }))
  } 

  const submitForm = () => {
    const id = formData.length + 1;
    const newForm = {
      id,
      name: myForm.name,
      idade: myForm.idade,
      Bloco: myForm.Bloco,
    }
    atualizaForm(newForm);
    setMyForm(() => ({
      name: '',
      idade: '',
    }))
  }

  const submitList = () => {
    history.push('/newPage');
  }

  return (
    <section className="App-header">
      <form>
      <input type="text" name="name" value={myForm.name} onChange={ handChange } />
      <br></br>
      <input type="number" name="idade" value={myForm.idade} onChange={ handChange } />
      <br></br>
        Bloco
      <label htmlForm="label">
        Fundamentos
        <input
          type="radio"
          id="Fundamentos"
          name="label"
          onChange={ handChange }
        />
        Front-end
        <input
          type="radio"
          id="Front-end"
          name="label"
          onChange={ handChange }
        />
        Back-end
        <input
          type="radio"
          id="Back-end"
          name="label"
          onChange={ handChange }
        />
        Ciência da Computação
        <input
          type="radio"
          id="Ciencia-da-Computacao"
          name="label"
          onChange={ handChange }
        />
      </label>
      <br></br>
        <button type='button' onClick={submitForm}>Salvar</button>
        <button type='button' onClick={ submitList }>Lista</button>
      </form>
    </section>
  )
}

export default Form;