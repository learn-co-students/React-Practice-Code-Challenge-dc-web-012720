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
      allSushi: [],
      currentIndex: 0,
      eaten: [],
      budgetRemaining: 200,
      typedBudget: 0
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      this.setState({allSushi: sushi})
  })
}

  render() {
    return (
      <div className="app">
        <Wallet  typedBudget = {this.state.typedBudget} handleOnChange = {this.handleOnChange} handleSubmit = {this.handleSubmit}/>
        <SushiContainer handleEating = {this.handleEating} handleMoreButton = {this.handleMoreButton} eatenSushi = {this.state.eaten} sushi = {this.state.allSushi.slice(this.state.currentIndex, this.state.currentIndex + 4)} />
        <Table eatenSushi = {this.state.eaten} budgetRemaining = {this.state.budgetRemaining}/>
      </div>
    );
  }

  handleMoreButton = () => {
    this.setState({currentIndex: this.state.currentIndex + 4})
  }

  handleEating = (sushi) => {
    if (this.state.eaten.includes(sushi)) {
      null
    }
    else if (sushi.price > this.state.budgetRemaining){
      alert(`Add $${sushi.price - this.state.budgetRemaining} to purchase this delicious sushi!`)
    } else {
    this.setState({eaten: [...this.state.eaten, sushi],
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
    this.setState({budgetRemaining: this.state.budgetRemaining + this.state.typedBudget,
                    typedBudget: 0})
  }
}

export default App;