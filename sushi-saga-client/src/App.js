import React, { useState, useEffect } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

export default function App() {

  let [sushiList, sushiListSet] = useState([]);
  let [removedSushi, removedSushiSet] = useState([])
  let [total, totalSet] = useState(100)



  useEffect(() => {
    function fetchSushi() {
      fetch(API).then(r => r.json()).then(json => sushiListSet(json))
    }
    fetchSushi()
  }, [])

  function removeASushi(data) {
    removedSushiSet(removedSushi.concat(data));
  }

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} removeASushi={removeASushi} total={total} totalSet={totalSet} />
      <Table eatenSushi={removedSushi} total={total} />
    </div>
  );



}
