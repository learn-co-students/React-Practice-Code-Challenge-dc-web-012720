import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushis: [],
      indexSushi: 0
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({allSushis: sushis}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.allSushis.slice(this.state.indexSushi,this.state.indexSushi+4)} />
        <Table />
      </div>
    );
  }
}

export default App;