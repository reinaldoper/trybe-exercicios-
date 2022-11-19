import { Route, Switch } from 'react-router-dom';
import './App.css';
import initialPage from './page/initialPage';
import digimon from './page/digimon';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ initialPage } />
        <Route exact path="/pok" component={ digimon } />
      </Switch>
    </div>
  );
}

export default App;
