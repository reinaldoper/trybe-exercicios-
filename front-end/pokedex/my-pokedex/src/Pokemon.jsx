import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.game;
        return (
            <div className="pokemon">
                <div className="poke">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{averageWeight.value}:{averageWeight.measurementUnit}</p>
                </div>
                <img src={image} alt={name} />
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