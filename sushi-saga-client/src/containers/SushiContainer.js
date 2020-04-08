import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => {
            return <Sushi handleEating = {props.handleEating} sushi = {sushi} key = {sushi.id} eatenSushis={props.eatenSushis}/>
          })
        }
        <MoreButton handleMoreButton = {props.handleMoreButton} />
      </div>
    </Fragment>
  )
}

export default SushiContainer