import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PoksFavoritos extends Component {
    render() {
        const { favoritos } = this.props;
        const poksFavoritos = favoritos.map((poks) => {
            return <div key={poks.id} className="poke">
                <p>{poks.name}</p>
                <p>{poks.Type}</p>
                <p>{`Avered: ${poks.averageWeight.value} - ${poks.averageWeight.measurementUnit}`}</p>
                <p><img src={poks.image} alt={poks.name} /></p>
            </div>
        })
    return (
        <div>
            <h1>Poks Favoritos</h1>
            <Link to="/">Home</Link>
            <ol className="pokemon">
            {poksFavoritos}  
            </ol>
        </div>
    )
  }
}
