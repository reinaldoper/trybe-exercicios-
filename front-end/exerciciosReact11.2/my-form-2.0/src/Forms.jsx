import React, { Component } from "react";

class Forms extends Component {
    render() {
        const { honChange } = this.props;
        return (
            
            <input type='text' required="required" maxLength={40} name='nome'
              onChange={honChange} className='text' />
            
        );
    }
}

export default Forms;