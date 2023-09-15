import React from 'react';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
          this.state = {
          count: 0
        }
  }
  
  
    increment(){
      this.setState({
        count: this.state.count + 1
      })
    };
  
  
    decrement(){
      this.setState({
        count: this.state.count - 1
      })
    };
  
    reset(){
      this.setState({
        count: 0
      })
    };
  
  render(){
    return(
      <div className='countBox'>
        <h1> {this.state.count}</h1>
        <div className='btnBox'>
          <button id='incBtn' onClick = {(e) => this.increment(e)}>+</button>
          <button id='decBtn' onClick = {(e) => this.decrement(e)}>-</button>
          <button id='resetBtn' onClick = {(e) => this.reset(e)}>reset</button>
        </div>
      </div>
    )
  }
  

};

export default App;
