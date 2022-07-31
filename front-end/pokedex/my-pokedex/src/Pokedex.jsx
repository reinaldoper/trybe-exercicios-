import React from "react";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        const result = pokemons.map((poke) => {
            return <Pokemon key={poke.id} game={poke} />
        })
        return (
            <div className="geral">
                <h1>Pokedex</h1>
                <Link to="/favoritos">Favoritos</Link>
                <div className="pokedex">
                    {result}
                </div>
            </div>

        )
    }
}
export default Pokedex;