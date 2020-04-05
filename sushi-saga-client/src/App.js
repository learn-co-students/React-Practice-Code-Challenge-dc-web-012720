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
      display_index: 0
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

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.showSushi()} btnFunction = {this.updateDisplayIndex}/>
        <Table />
      </div>
    );
  }
}

export default App;