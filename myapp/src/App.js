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
render() {
  return (
    <div className="App">
      <h1>My first react app</h1>
      <p>Welcome :)</p>    
      <Ninjas ninjas={this.state.ninjas} />  
      <AddNinja />
    </div>
  );
}
}
  

export default App;
