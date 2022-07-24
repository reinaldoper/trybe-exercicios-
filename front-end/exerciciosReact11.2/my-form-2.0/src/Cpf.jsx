import React, { Component } from "react";

class Cpf extends Component {
    render() {

        const { honChange } = this.props;
        return (
            <input type='text' required="required" maxLength={11} name='cpf' 
            onChange={honChange} /> 
        );
    }
}

export default Cpf;