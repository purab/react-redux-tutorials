import React, { Component } from 'react';
import AddForm from './AddForm';
import Navbar from './components/Navbar';
import Todos from './Todos'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id;
    })
    this.setState({
      todos 
    })
  }
  addTodo = (todo) =>{
    console.log(todo)
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <BrowserRouter>
          <div className="todo-app container">
          <Navbar />
          <switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/:post_id' component={Post} />
          </switch>          
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddForm addTodo={this.addTodo}/>
        </div>
      </BrowserRouter>
      
    );
  }  
}

export default App;
