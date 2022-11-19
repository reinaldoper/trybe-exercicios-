import { Route, Switch } from 'react-router-dom';
import './App.css';
import initialPage from './page/initialPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path="/" component={ initialPage } />
      </Switch>
      </header>
    </div>
  );
}

export default App;
