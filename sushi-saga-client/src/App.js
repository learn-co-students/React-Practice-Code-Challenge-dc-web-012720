import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      allSushi: [],
      display_index: 0,
      eaten: [],
      money: 100
    }
  }
  
  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => this.setState({ allSushi: sushi}))
    
  }

  showSushi = () => {
        return this.state.allSushi.slice(this.state.display_index, this.state.display_index+4)
  }

  updateDisplayIndex = () => {
    this.setState({
      display_index: this.state.display_index + 4
    })
  }

  sushiIsEaten = (sushi) => {
    const balance = this.state.money - sushi.price
      if (!this.state.eaten.includes(sushi) && balance >= 0) {
        this.setState({
          eaten: [...this.state.eaten, sushi],
          money: balance
        })
      }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.showSushi()} eaten={this.state.eaten} btnFunction = {this.updateDisplayIndex} sushiIsEaten={this.sushiIsEaten}/>
        <Table money={this.state.money} plateNum={this.state.eaten}/>
      </div>
    );
  }
}

export default App;