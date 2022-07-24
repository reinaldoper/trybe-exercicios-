import React, { Component } from "react";

class Senha extends Component {
    render() {
        const { honChange } = this.props;
        return (
            <input type='password' maxLength={50} required="required" name='password'
            onChange={honChange} /> 
        );
    }
}

export default Senha;