import React, { useContext } from 'react';
import AppContext from './utils/AppContext';

const ComponenteX = () => {
  const { stateA, setStateA, stateB, setStateB } = useContext(AppContext);
    const handClick = () => {
        /* console.log('click'); */
        setStateA("newStateA");
        setStateB("newStateB")
  }
  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={ handClick }>Click</button>
    </div>
  );
};

export default ComponenteX;