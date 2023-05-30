// Завдання 0
import { Component } from "react";

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          fname: 'Task-1'
        }
        this.nameChange.bind(this)
  }
  nameChange = (event) =>{
    this.setState({ fname: event.target.value})
  }
  render(){
  return (
      <div className="App">
        <h1>{this.state.fname}</h1>
        <input type="text" value={this.state.fname} onChange={ this.nameChange }/>
      </div>
  );
  }
  

}


export default App;
