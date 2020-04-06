import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {

  function renderSushi(){
    return props.allSushis.map(sushi => <Sushi balance={props.balance}key={sushi.id}sushi={sushi} eatenSushi={props.eatenSushi} eatenSushiFn={props.eatenSushiFn}/>)
  }
  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
                  }
        <MoreButton nextSushis = {props.nextSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer