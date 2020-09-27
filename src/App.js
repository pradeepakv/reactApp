import React, { Component } from 'react';
import NestedComp from './NestedComp';

class App extends Component {
  state = {
    nestedComp:[
      {name: "meena", age: 32, id:1},
      {name: "ryu", age: 33, id:2}
    ]
    
  }

  render(){
    return (
    <div  className="App">
      <h1>My first React APP!</h1>
      <NestedComp nestedComp = {this.state.nestedComp}/>
    </div>
   );
  }
  
}

export default App;
