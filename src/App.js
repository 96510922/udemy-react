// import logo from './logo.svg';
// import './App.css';


import React , {Component} from "react";


const App  =  () => ( <Counter></Counter> )


class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }
  decrement = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>+1</button>
        <button　onClick={this.decrement}>-1</button>
      </React.Fragment>
    
    
    )
  }
}


export default App;
