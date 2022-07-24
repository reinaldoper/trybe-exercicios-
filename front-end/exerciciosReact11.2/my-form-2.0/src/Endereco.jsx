import React, { Component } from "react";

class Endereco extends Component {
    render() {
        const { honChange } = this.props;
        return (
            <input type='text' required="required" maxLength={200} name='endereco' onChange={honChange} /> 
        );
    }
}

export default Endereco;