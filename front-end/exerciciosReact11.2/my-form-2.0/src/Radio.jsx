import React, { Component } from "react";

class Radio extends Component {
    render() {
        const { honChange } = this.props;
        return (
            <div onChange={honChange}>
               <input type="radio" name="house" value='casa' />Casa<br />
               <input type="radio" name="house" value='apartamento' />Apartamento<br />
          </div>
        )
    }
}

export default Radio;