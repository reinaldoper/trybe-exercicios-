import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.inicial = {
      title: '',
    }
    this.state = this.inicial;
  }
  
    honChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        })
    }
  stopInput = (event) => {
    event.preventDefault();
    const { onCreate } = this.props;
    onCreate(this.state);
    this.setState(this.inicial);
     Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }
  render() {
    
      return (
      <form onSubmit={this.stopInput}>
        <input type='text' name='title' onChange={this.honChange}></input>
        <button type='submit'>Adicionar Tarefa</button>
      </form>
    )
  }
}
AddTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
}
export default AddTask;
