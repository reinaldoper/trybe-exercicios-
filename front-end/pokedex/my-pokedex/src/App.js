
import './App.css';
import Pokedex from './Pokedex';
import { Route, Switch } from 'react-router-dom'
import pokemons from "./data";
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';
import { Component } from 'react';
import PoksFavoritos from './PoksFavoritos';
class App extends Component {
  constructor() {
    super()
    this.state = {
      listPokemons: pokemons,
      pokemonsFavoriters: JSON.parse(localStorage.getItem('favoritos')),
    }
  }
  hanChange = (pok, favorite) => {
    if (!favorite) {
      this.setState((anterior) => {
        const localSave = [...anterior.pokemonsFavoriters, pok];
        localStorage.setItem('favoritos', JSON.stringify(localSave));
        return {
          pokemonsFavoriters: localSave ,
        }
      })
    } else {
      this.setState((ant) => {
        const localSave = ant.pokemonsFavoriters.filter((item) => item.id !== pok.id);
        localStorage.setItem('favoritos', JSON.stringify(localSave));
        return {
          pokemonsFavoriters: localSave,
        }
      })
    }
  }
  render() {
    const { listPokemons, pokemonsFavoriters } = this.state;
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={() => <Pokedex pokemons={listPokemons} />} />
      {<Route path="/pokemons/:id" render={(props) => <PokemonDetails {...props} pokemons={listPokemons} pokemonsFavoriters={pokemonsFavoriters} hanChange={this.hanChange} />} />}
      {/* {<Route path="/pokemons/:id" component={PokemonDetails} />} */}
        <Route exact path="/about" component={About} />
        <Route exact path="/favoritos" render={(props) => <PoksFavoritos {...props} favoritos={pokemonsFavoriters} />} />
        <Route component={NotFound} />
        </Switch>
    </div>
  );
}
}

export default App;
