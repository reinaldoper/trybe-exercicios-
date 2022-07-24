import React from "react";

class Cidade extends React.Component {
    render() {
        const { honChange, handleBlur } = this.props;
        return (
            <input type='text' required="required" maxLength={28} name='cidade' onChange={ honChange} onBlur={handleBlur} className='cidade' /> 
        )
    }
}

export default Cidade;