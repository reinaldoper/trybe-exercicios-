import React, { Component } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import Task from './Components/Task';

class App extends Component {
 
  state = {
    tasks: [],
  }
  componentDidMount() {
    this.atualizaPage();
  }
  atualizaPage() {
    let atualizatask = localStorage.getItem('tasks');
    atualizatask = JSON.parse(atualizatask);
    this.setState({
      tasks: atualizatask,
    })
  }
  createTask = (newTask) => {
    const { tasks } = this.state;
    const atualiza = [...tasks, newTask];
    this.setState({
      tasks: atualiza,
    })
    localStorage.setItem('tasks', JSON.stringify(atualiza))
  }
  
  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <h1>
          Hellow, word!
        </h1>
        <AddTask onCreate={this.createTask} />
        {tasks.map((task, index) => (
          <Task key={index} data={task} />
        ))}
      </div>
    );
  }
}

export default App;
