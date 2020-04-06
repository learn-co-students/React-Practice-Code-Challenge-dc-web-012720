import React, { useState } from 'react'

const Sushi = ({ sushiData, removeASushi, total, totalSet }) => {

  const [eaten, eatenSet] = useState(false)
  // const [warning, warningSet] = useState(false)

  function removeSushi() {
    if (total - sushiData.price > 0) {
      eatenSet(true);
      removeASushi(sushiData)
      totalSet(total - sushiData.price)
    } else {
      alert("No Money")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" >
        {eaten ? null : <img src={sushiData.img_url} width="100%" alt={sushiData.name} onClick={removeSushi} />}
      </div>

      <h4 className="sushi-details">
        {sushiData.name} ${sushiData.price}
      </h4>
      {/* {warning ? <div>CAN'T AFFORD THIS!</div> : null} */}
    </div >
  )
}

export default Sushi