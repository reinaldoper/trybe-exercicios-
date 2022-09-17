import React, { useContext } from 'react';
import AppContext from './utils/AppContext';

const ComponenteX = () => {
  const { stateA, setStateA, stateB, setStateB } = useContext(AppContext);
    const handClick = () => {
        /* console.log('click'); */
        setStateA(stateA + 1);
        setStateB(stateB + 2)
  }
  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB + stateA}</p>
      <button onClick={ handClick }>Click</button>
    </div>
  );
};

export default ComponenteX;