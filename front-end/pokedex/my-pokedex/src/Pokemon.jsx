import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight:{value, measurementUnit }, image, id } = this.props.game;
        return (
            <div className="pokemon">
                <div className="poke">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>
                    Average wheight: {`${value} ${measurementUnit}`}
                    </p>
                    <Link to={`/pokemons/${id}`}>Mais detalhes</Link>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        )
    }
}
Pokemon.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.number,
    image: PropTypes.string,
};

export default Pokemon;