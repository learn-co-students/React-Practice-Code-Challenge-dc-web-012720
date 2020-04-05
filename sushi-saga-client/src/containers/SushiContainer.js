import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let sushiCompArray = props.allSushi.map(sushiObj => <Sushi sushi={sushiObj} key = {sushiObj.id} />)
  return (
    <Fragment>
      <div className="belt">
        {
          sushiCompArray
        }
        <MoreButton btnFunction={props.btnFunction}/>
      </div>
    </Fragment>
  )
}


export default SushiContainer