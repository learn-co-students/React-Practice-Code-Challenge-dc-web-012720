import React, { useState } from 'react'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let [page, pageSet] = useState(1)

  function handleMore() {
    pageSet(page + 1)
  }

  return (

    <div className="belt">
      {props.sushiList
        .filter((x, i) => i < (page * 4) && i > ((page * 4) - 5))
        .map(sushi =>
          <Sushi
            sushiData={sushi}
            key={sushi.id}
            removeASushi={props.removeASushi}
            total={props.total}
            totalSet={props.totalSet} />)}
      <button onClick={handleMore} >More Sushi</button>
    </div>

  )
}

export default SushiContainer