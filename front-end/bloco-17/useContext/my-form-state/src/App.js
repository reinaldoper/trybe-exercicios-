import React from 'react';
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import './App.css';
import { FormProvide } from './context/FormProvide';
import Form from './pages/Form';
import NewPageRenderiza from './pages/NewPageRenderiza';

function App() {
  return (
    
    <FormProvide>
      <div className="App">
        <header className="App-header">
          {/* <Form /> */}
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/newPage" component={NewPageRenderiza} />
          </Switch>
          </BrowserRouter>
      </div>
    </FormProvide>
    
  );
}

export default App;
