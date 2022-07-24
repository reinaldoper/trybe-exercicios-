import React, { Component } from 'react'

class Task extends Component {
    render() {
        const { data } = this.props;
        const { title } = data;
    return (
        <div>
            {title} 
        <button type='button'> Remover</button>
      </div>
    )
  }
}

export default Task;

