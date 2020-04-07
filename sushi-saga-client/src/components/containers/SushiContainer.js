import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
 
  const sushiList = () => {
    props.sushis.map(sushi => {
      return <Sushi sushi={sushi} key={sushi.id} />
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {sushiList()}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer