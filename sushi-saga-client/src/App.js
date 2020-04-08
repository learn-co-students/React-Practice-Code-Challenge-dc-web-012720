import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
    allSushis: [],
    indexSushi: 0,
    eatenSushis: [],
    budgetRemaining: 200,
    typedBudget: 0
    }
  }
SushisSu
  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({allSushis: sushis}))
  }

  render() {
    return (
      <div className="app">
         <Wallet typedBudget = {this.state.typedBudget} handleOnChange = {this.handleOnChange} handleSubmit = {this.handleSubmit}/>
        <SushiContainer sushis={this.state.allSushis.slice(this.state.indexSushi,this.state.indexSushi+4)} eatenSushis = {this.state.eatenSushis} handleEating = {this.handleEating} handleMoreButton = {this.handleMoreButton}/>
        <Table eatenSushis = {this.state.eatenSushis} budgetRemaining = {this.state.budgetRemaining}/>
      </div>
    );
  }

  handleMoreButton = () => {
    console.log("You hit more button")
    let newIndex = this.state.indexSushi + 4
    this.setState({indexSushi: newIndex})
  }

  handleEating = (sushi) => {
    if (this.state.eatenSushis.includes(sushi)) {
      return null
    } 
    else if (sushi.price > this.state.budgetRemaining){
      alert(`Add $${sushi.price - this.state.budgetRemaining} to purchase this delicious sushi!`)
    } else {
    this.setState({eatenSushis: [...this.state.eatenSushis, sushi],
                  budgetRemaining: (this.state.budgetRemaining - sushi.price)})
    }
  }

  handleOnChange = (event) => {
    if (event.target.value === "") {
      this.setState({typedBudget: 0})
    } else {
    this.setState({typedBudget: parseInt(event.target.value)})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({budgetRemaining: this.state.budgetRemaining + this.state.typedBudget, typedBudget: 0})
  }

}

export default App;