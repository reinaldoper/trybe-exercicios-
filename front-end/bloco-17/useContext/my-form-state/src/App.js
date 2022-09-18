import React from 'react';
/* import { Route, Switch } from 'react-router-dom'; */
import './App.css';
import { FormProvide } from './context/FormProvide';
import Form from './pages/Form';

function App() {
  return (
    <FormProvide>
      <div className="App">
        <header className="App-header">
          <Form />
        </header>
        {/* <Switch>
          <Route path="/" component={Form} />
        </Switch> */}
      </div>
    </FormProvide>
  );
}

export default App;
