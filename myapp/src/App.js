import React, { Component } from 'react';
import AddNinja from './AddNinja';
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas : [
      {name:"purab", age:30,belt:"black",id:1},
      {name:"neha", age:33,belt:"red",id:2},
      {name:"sanchi", age:32,belt:"green",id:3}
    ]
  }
  AddNinja = (ninja) => {
    console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
    
  }
render() {
  return (
    <div className="App">
      <h1>My first react app</h1>
      <p>Welcome :)</p>    
      <Ninjas ninjas={this.state.ninjas} />  
      <AddNinja AddNinja={this.AddNinja} />
    </div>
  );
}
}
  

export default App;
