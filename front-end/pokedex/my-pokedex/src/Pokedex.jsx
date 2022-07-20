import React from "react";
import unidade from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        const result = unidade.map((poke) => {
            return <Pokemon key={poke.id} game={poke} />
        })
        return (
            <div className="geral">
                <h1>Pokedex</h1>
                <div className="pokedex">
                    {result}
                </div>
            </div>

        )
    }
}
export default Pokedex;