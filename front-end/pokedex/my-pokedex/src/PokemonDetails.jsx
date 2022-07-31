import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonDetails extends Component {
    render() {
        const { pokemons, match: { params: { id } }, pokemonsFavoriters, hanChange } = this.props;
        const pokemonsFound = pokemons.find((pok) => pok.id === Number(id));
        const isFavorites = pokemonsFavoriters.some((item) => item.id === pokemonsFound.id);
        let favoriters;
        if (isFavorites) {
            favoriters = (
                <h1>Favorito</h1>
            )
        };
        const { name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = pokemonsFound;
        return (
            <div className="poke">
                <nav>
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                    <p>
                        <Link to="/about">About</Link>
                    </p>
                </nav>
                <h1>PokemonDetails</h1>
                <p>Nome: {name}</p>
                <p>Tipo: {type}</p>
                <p>
                    Average wheight: {`${value} ${measurementUnit}`}
                </p>
                <p>Site: {moreInfo}</p>
                <img src={image} alt={`${name} sprite`} />
                <p>
                    Favoritado?
                    <input type="checkbox" checked={isFavorites} onChange={() => hanChange(pokemonsFound, isFavorites)} />
                </p>
                <p>
                    {favoriters} 
                </p>
            </div>

        )
    }
}
export default PokemonDetails;
