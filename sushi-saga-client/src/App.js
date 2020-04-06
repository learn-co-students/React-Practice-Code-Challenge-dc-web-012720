import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sushi: [],
      index: 0,
      money: 100,
      eat: []
    }
  }

  componentDidMount() {
    fetch(API).then(response => response.json()).then((json) => this.setState({sushi: json}))
  }

  moreSushi = () => {
    return this.setState({index: this.state.index + 4})
  }

  eat = (sushi) => {
    console.log("eat was hit")
    let newMoney = this.state.money - sushi.price;
    if (newMoney >= 0 && !this.state.eat.includes(sushi)) {
      this.setState({
        money: newMoney,
        eat: [...this.state.eat, sushi]
      })
    }

  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi.slice(this.state.index, this.state.index+4)}
                        moreSushi={this.moreSushi}
                        eat={this.eat}
                        eaten={this.state.eat}
        />
        <Table  budget={this.state.money}
                eat={this.state.eat}
        />
      </div>
    );
  }
}

export default App;
