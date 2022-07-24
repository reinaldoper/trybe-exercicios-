import React, { Component } from "react";

class Estado extends Component {
    render() {
        const { honChange } = this.props;
        return (
        <select name='box' required="required"
                        onChange={honChange}>
               <option>MS</option>
               <option>PR</option>
               <option>MT</option>
               <option>RJ</option>
               <option>SP</option>
               <option>AC</option>
               <option>AM</option>
               <option>RN</option>
               <option>ES</option>
          </select>
        )
    }
}

export default Estado;