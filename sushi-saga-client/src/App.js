import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      allSushis: [],
      firstIndex: 0,
      eatenSushi: [],
      balance: 100
    }
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(sushiData => this.setState({allSushis: sushiData}))
  }

  nextSushis = () => {
    this.setState({
      firstIndex: this.state.firstIndex + 4
    })
  }

  eatenSushi = (sushiObj) => {
    if(this.state.balance > sushiObj.price) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushiObj],
        balance: this.state.balance -= sushiObj.price
      })
    } else {
      console.log("Not enough money")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer balance={this.state.balance} allSushis={this.state.allSushis.slice(this.state.firstIndex, this.state.firstIndex + 4)} 
        nextSushis = {this.nextSushis}
        eatenSushi={this.state.eatenSushi}
        eatenSushiFn = {this.eatenSushi}
        />
        <Table balance={this.state.balance} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;