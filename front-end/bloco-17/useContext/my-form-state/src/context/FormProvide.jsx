import React, { useState } from 'react';
import FormContext from './FormContext';


export function FormProvide({ children }) {
  
  const [formData, setForm] = useState([]);
  
  const atualizaForm = (newForm) => {
    setForm((state) => ([
      ...state,
      newForm,
    ]))
  }
  const contextValue = {
    formData,
    atualizaForm,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
}