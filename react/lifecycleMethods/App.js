import { Component } from 'react';
import './App.css';
import Counter from './Counter';
import CounterApp from './CounterApp';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      visible: false,

    }
  }
  handleClick = () => {

    this.setState({
      visible: true
    })

  }
  unmount = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div className="app">


        {this.state.visible ? <CounterApp /> : ""}

        <button onClick={this.handleClick} >Mount Counter</button>
        <button onClick={this.unmount} >Unmount Counter</button>



        {/* <Counter /> */}


      </div>
    );
  }

}

export default App;
